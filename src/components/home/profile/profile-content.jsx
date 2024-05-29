import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../state/actions/profile-action";
import ProfilePhoto from "./profile-photo";
import ProfileCover from "./profile-cover";
import ProfileUsername from "./profile-username";
import UserFollowing from "./profile-following";
import UserFollowers from "./profile-followers";
import ProfileInfo from "./profile-info";

const ProfileContent = ({userId}) => {

   const { profile } = useSelector(state => state.profile)
   const dispatch = useDispatch();

   useEffect(()=>{dispatch(getUser(userId))}, [userId]);

    return(
        <div className="card">
           <div className="flex flex-col items-center mx-[-15px]">

                <ProfileCover coverPicUrl={profile.coverPicUrl} userId={profile.id}/>

                <div className="flex flex-col items-center gap-1">
                    <ProfilePhoto profilePicUrl={profile.profilePicUrl} userId={profile.id}/>
                    <ProfileUsername name={profile.username} userId={profile.id}/>
                    <p className="font-semibold text-md text-secondryColor">{profile.bio}</p> 
                </div>

                <div className="flex justify-between w-full md:w-2/3 items-center mt-10 font-bold text-md text-primaryColor">
                    <UserFollowing id={profile.id} followingCount={profile.following?.length}/>
                    <UserFollowers id={profile.id} followersCount={profile.followers?.length}/>
                    <div className="flex flex-col items-center w-1/3">
                        <span className="text-primaryColor">{profile.posts?.length}</span>
                        <p>Posts</p>
                    </div>
                </div>
                
            </div>

            <div className="lg:hidden mt-4 border-t-4 border-secondry md:flex md:justify-center">
                <div className="md:w-4/5">
                    <ProfileInfo/>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileContent;