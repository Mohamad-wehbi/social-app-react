import {MdLocationOn, MdWork, MdEmail, MdVpnKey } from "react-icons/md"
import {BsFillHeartPulseFill} from "react-icons/bs"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import UpdateProfile from "./update-profile";
import IsAuth from "../../global/isAuth";
import { getDefaultUser } from "../../../state/actions/profile-action";
import UpdatePassword from "./update-password";
import UpdateEmail from "./update-email";


const ProfileInfo = () => {

    const {user} = useSelector(state=> state.auth);
    const {profile} = useSelector(state=> state.profile);
    
    const dispatch = useDispatch();
    useEffect(()=> {dispatch(getDefaultUser(user.id))}, []);
    
    return(

        <div className="w-full"> 
            <div className="py-3 mb-3 border-b-4 border-secondry flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl text-primaryColor mb-2">Information:</h2>
                    <IsAuth userId={profile.id}>
                        <UpdateProfile profile={profile}/>
                    </IsAuth>
                </div>
                <div className="flex items-center gap-3">
                    <BsFillHeartPulseFill className="text-lg text-primaryColor"/>
                    <p className="font-semibold text-md text-secondryColor lowercase first-letter:uppercase">{profile.status || "None"}</p>
                </div>
                <div className="flex items-center gap-3">
                    <MdWork className="text-xl text-primaryColor"/>
                    <p className="font-semibold text-md text-secondryColor">{profile.worksAt || "None"}</p>
                </div>
                <div className="flex items-center gap-3">
                    <MdLocationOn className="text-xl text-primaryColor"/>
                    <p className=" font-semibold text-md text-secondryColor">{profile.livesin || "None"}</p>
                </div>  
            </div>
            <div className="pb-3 mb-3 border-b-4 border-secondry">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl text-primaryColor mb-4">Email:</h2>
                    <IsAuth userId={profile.id}>
                        <UpdateEmail profile={profile}/>
                    </IsAuth>
                </div>
                <div className="flex items-center gap-3">
                    <MdEmail className="text-lg text-primaryColor"/>
                    <p className="font-semibold text-md text-secondryColor">{profile.email}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl text-primaryColor mb-4">Password:</h2>
                <IsAuth userId={profile.id}>
                    <UpdatePassword/>
                </IsAuth>
            </div>
            <div className="flex items-center gap-3">
                <MdVpnKey   className="text-lg text-primaryColor"/>
                <p className="font-semibold text-md text-secondryColor">Update Your Password</p>
            </div>
        </div>
    )
}

export default ProfileInfo;