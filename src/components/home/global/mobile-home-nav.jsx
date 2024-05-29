import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaRegBell } from "react-icons/fa";
import { FaHouseChimney, FaRegCircleUser } from "react-icons/fa6";

const MobileHomeNav = () => {

    const {user} = useSelector(state=> state.auth);

    const locationArray = location.pathname.split("/");
    const path = locationArray[1] ? locationArray[1] : "main";
    
    const [active, setActive] = useState(path);
    const navicate = useNavigate();
    
    window.onresize = ()=>{

        if(window.innerWidth > 992 && location.pathname == "/users" || location.pathname == "/notification"){
            navicate("/")
            setActive("main")
        }  
    }    
    
    return(
        <div className="rounded-2xl w-full bg-main px-3 pb-1 my-2 lg:hidden">
            <ul className="w-full flex justify-around gap-1 text-primary text-2xl">
                <Link to="" onClick={()=>setActive("main")} className={`${active== "main"? "mobile-home-nav": null} p-4`}>
                    <FaHouseChimney  className={`${active== "main"? "rotate-90": null}`} />
                </Link>
                <Link to="users" onClick={()=>setActive("users")} className={`${active=="users"? "mobile-home-nav": null}  p-4`}>
                    <MdSupervisorAccount className={`${active== "users"? "rotate-90": null}`} />
                </Link>
                <Link to={`profile/${user.id}`} onClick={()=>setActive("profile")} className={`${active=="profile"? "mobile-home-nav": null} p-4`}>
                    <FaRegCircleUser  className={`${active== "profile"? "rotate-90": null}`}/>
                </Link>
                <Link to="notification" onClick={()=>setActive("notification")} className={`${active=="notification"? "mobile-home-nav": null} p-4`}>
                    <FaRegBell className={`${active== "notification"? "rotate-90": null}`}/>
                </Link>
            </ul>
        </div>
        
    )
}

export default MobileHomeNav;