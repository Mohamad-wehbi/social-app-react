import {Menu, MenuHandler, MenuList, MenuItem} from "@material-tailwind/react";
import { BiLogOut } from "react-icons/bi";
import { logoutAlert } from "../../utils/sweetAlert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../state/actions/auth-action";
import { FaRegCircleUser } from "react-icons/fa6";
   
  const LogoutMenu = ({user}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => dispatch(logout(navigate));

    const goProfile = () =>{
        navigate(`/profile/${user.id}`);
    }


    return (
      <Menu dismiss={{itemPress: true}} className="bg-primary">

        <MenuHandler>
            <img src={user.profilePicUrl} alt="photo" className="w-10 h-10 object-cover rounded-full" />
        </MenuHandler>

        <MenuList className="flex flex-col gap-2 bg-primary font-bold text-primaryColor">  

          <MenuItem>
                <div onClick={goProfile} className="flex items-center gap-4 py-2 pl-2 pr-8">
                    <FaRegCircleUser className="text-xl" />
                    <div>Profile</div>
                </div>
          </MenuItem>

          <MenuItem>
                <div onClick={()=> logoutAlert(logoutHandler)} className="flex items-center gap-4 py-2 pl-2 pr-8">
                    <BiLogOut className="text-xl"/>
                    <div>Logout</div>
                </div>
          </MenuItem>

        </MenuList>
        
      </Menu>
    );
  }


  export default LogoutMenu;