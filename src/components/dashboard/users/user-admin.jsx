import { BiSolidPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import DeleteAdminUser from "./delete-user";
import UserInfo from "../../global/user-info";

const UserAdmin = ({profile}) => {


    return(
        
        <div className="flex items-center rounded-lg text-secondryColor font-semibold border-2 border-gray-800 px-4 py-3">
            <div className="md:w-2/6 w-4/6">
                <UserInfo image={profile.profilePicUrl} username={profile.username} userId={profile.id} desc={profile.email}/>          
            </div>
            <p className="hidden md:block w-1/6">{profile.workAt || "None"}</p>
            <p className="hidden md:block w-1/6">{profile.livesin || "None"}</p>
            <Link className="transition-opacity hover:opacity-50 w-1/6 pl-3" to={`/profile/${profile.id}`}>
                <BiSolidPencil className="p-1 text-primaryColor bg-main text-2xl rounded-full"/>
            </Link>
            <DeleteAdminUser userId={profile.id}/>
        </div>
    )
}

export default UserAdmin