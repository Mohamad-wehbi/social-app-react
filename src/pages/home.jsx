import { Outlet, useNavigate } from "react-router";
import Header from "../components/global/header";
import MobileHomeNav from "../components/home/global/mobile-home-nav";
import Notifications from "../components/home/notification/notifications";
import Logout from "../components/home/global/logout";
import ProfileData from "../components/home/profile/profile-data";
import Users from "../components/home/user/users";
import IsLogedin from "../components/global/isLogedin";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {

    const {user} = useSelector(state=> state.auth);
    const navicate = useNavigate()
    useEffect(() => { !user && navicate("/auth") }, []);

    return (

            <IsLogedin>

                <Header/>
                <div className="container bg-secondry pt-2 h-[calc(100vh-4rem)]">
                    <div className="w-full h-full flex flex-col lg:flex-row gap-2">

                        <div className="hidden w-1/3  lg:block 2xl:w-1/4 h-full">
                            <div className="h-full flex flex-col justify-between gap-2">
                                <ProfileData/>
                                <Users/>
                            </div>  
                        </div>

                        <Outlet />

                        <div className="hidden 2xl:block w-1/4 h-full">
                            <div className="h-full flex flex-col justify-between gap-2">
                                <Notifications />
                                <Logout/>
                            </div>   
                        </div>

                        <MobileHomeNav/>
                    </div> 
                </div>

            </IsLogedin>
            
        
    )
}

export default Home;