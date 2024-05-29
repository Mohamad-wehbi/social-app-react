import {FaUserCog} from "react-icons/fa"
import {IoMdArrowRoundBack} from "react-icons/io"
import { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProfilePath = () => {

    const {user} = useSelector(state=> state.auth);

    const [key, setKey] = useState(false);

    return(
            <div className="flex justify-between items-center w-full border-b-4 border-secondry pb-3  mb-3" onClick={()=> setKey(!key)}>
                <div className="flex items-center gap-3 cursor-pointer">
                    <Link to={ location.pathname == "/" ? `/profile/${user.id}` : "/" }>
                        <div className="rounded-full mt-[-5px] border-2 border-main w-16 h-16 p-1">
                            <img className="w-full h-full object-cover rounded-full " src={user.profilePicUrl} alt="photo" />
                        </div>
                    </Link>
                    <div className="leading-4">
                        <h2 className="font-bold text-primaryColor text-xl">{user.username}</h2>
                        <p className="font-semibold text-secondryColor text-md">My Profile</p>
                    </div>
                </div>
                <div className="text-primaryColor text-2xl">
                    {location.pathname == "/" ? <FaUserCog/> : <IoMdArrowRoundBack />  }
                </div>
            </div>
    )
}

export default ProfilePath;