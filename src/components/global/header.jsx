import {BsSunFill} from "react-icons/bs"
import { FaTwitter } from "react-icons/fa";
import {BiSolidMoon} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-tailwind/react";
import NotificationsDialog from "../home/notification/notifications-dialog";
import { Link } from "react-router-dom";
import { FaGear, FaHouseChimney } from "react-icons/fa6";
import MenuUser from "./logout-menu";
import {lightMode, darkMode} from "../../state/actions/theme-action"
import UsersSearch from "./users-search";


const Header = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=> state.auth);
    const {theme} = useSelector(state=> state.theme);

    const light = () => dispatch(lightMode())
    const dark = () => dispatch(darkMode())

    

    return(

    <header className="bg-secondry pt-2 h-[4rem]" >
        <div className="container">
            <div className="h-full hidden lg:block">
                <div className="h-full flex gap-2 items-center">
                    <div className="card flex gap-2 items-center h-full">

                        {user.role == "ADMIN"? 
                            <Link to={location.pathname=="/"?"/admin":"/"} className="text-3xl text-main cursor-pointer">
                                {location.pathname == "/" ? <FaGear className="animate-spin" />:<FaHouseChimney className="animate-pulse"/>}
                            </Link>
                            :<FaTwitter className="text-3xl text-main animate-bounce"/>}
                    
                        <h1 className="text-2xl font-bold text-primaryColor -mb-3">Social Media</h1>
                    </div>
                    <div className="card flex justify-center items-center h-full">
                        <UsersSearch/ >
                    </div>
                    <div className="card flex gap-5 justify-end items-center h-full">
                        <NotificationsDialog/>
                        <IconButton variant="text" className="text-primaryColor text-2xl">
                            {theme=="dark"? <BsSunFill className="text-main animate-pulse" onClick={light}/> : <BiSolidMoon onClick={dark}/>}
                        </IconButton>
                        <p className="font-bold text-primaryColor -mb-3">{user.username}</p>
                        <MenuUser user={user}/>
                    </div>
                </div>
            </div>
            
            <div className="lg:hidden card flex justify-between items-center h-full">
                <div className="flex gap-2 items-end">
                    {user.role == "ADMIN"? 
                            <Link to={location.pathname=="/"?"/admin":"/"} className="text-3xl text-main cursor-pointer">
                                {location.pathname == "/" ? <FaGear className="animate-spin" />:<FaHouseChimney className="animate-pulse"/>}
                            </Link>
                            :<FaTwitter className="text-3xl text-main animate-bounce"/>}
                    <h1 className="text-xl font-bold text-primaryColor">Social Media</h1>
                </div> 
                <UsersSearch/ >
                <div className="flex gap-4 items-center">
                    <NotificationsDialog/>
                    <IconButton variant="text" className="text-primaryColor text-2xl">{theme=="dark"? <BsSunFill className="text-main animate-pulse" onClick={light} /> : <BiSolidMoon onClick={dark}/>}</IconButton>
                    <MenuUser user={user}/>
                </div>
            </div>
        </div>        
    </header>
    )
}

export default Header;