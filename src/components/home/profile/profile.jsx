import { useParams } from "react-router";
import UserPosts from "../post/userPosts";
import ProfileContent from "./profile-content";



const Profile = () => {

    const {userId} = useParams();

    return (
        <div className="h-full w-3/3 lg:w-2/3 2xl:w-2/4 flex flex-col gap-2 overflow-auto">
            <ProfileContent userId={userId}/>
            <UserPosts/>
        </div>            
    )
}

export default Profile;