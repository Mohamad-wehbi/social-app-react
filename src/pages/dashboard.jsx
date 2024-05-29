import Header from "../components/global/header";
import BarChart from "../components/dashboard/global/barChart";
import InfChart from "../components/dashboard/global/chart";
import SideBar from "../components/dashboard/global/sideBar";
import { Outlet, useNavigate } from "react-router";
import MobileNav from "../components/dashboard/global/mobile-nav";
import { useEffect, useState } from "react";
import IsAdmin from "../components/global/isAdmin";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const {user} = useSelector(state=> state.auth);
    const navicate = useNavigate()
    useEffect(() => { !user ? navicate("/auth") : user.role == "USER" ? navicate("/") : null }, []);

    const locationArray = location.pathname.split("/");
    const path = locationArray.length > 2  ? locationArray[locationArray.length - 1] : "informations";
    const [active, setActive] = useState(path);

    return(

        <IsAdmin>

            <Header/>
            <div className="container bg-secondry py-2 h-[calc(100vh-4rem)]">
                <div className="h-full flex flex-col justify-between lg:flex-row gap-2">
                    <div className="w-full 2xl:w-3/4 h-full flex flex-col justify-between lg:flex-row gap-4 bg-primary p-3 rounded-2xl ">
                        <div className="hidden lg:block w-1/3 h-full">
                            <SideBar active={active} setActive={setActive}/>
                        </div>
                        <div className="w-full lg:w-2/3 h-full overflow-auto">
                            <Outlet />
                        </div>
                        <MobileNav active={active} setActive={setActive}/>
                    </div>
                    <div className="hidden 2xl:block w-1/4 h-full">
                        <div className="h-full flex flex-col gap-2">
                            <InfChart />
                            <BarChart/>
                        </div>
                    </div>
                </div> 
            </div>

        </IsAdmin>
    )
}

export default Dashboard;