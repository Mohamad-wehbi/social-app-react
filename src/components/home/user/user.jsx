import UserInfo from "../../global/user-info";
import FollowUser from "./follow-user";

const User = ({profile, like}) => {

    return(

        <div className="card hover:scale-[1.005]">
            <UserInfo image={profile.profilePicUrl} username={profile.username} userId={profile.id} desc={profile.email}>
                <FollowUser profile={profile} like={like}/>
            </UserInfo>
        </div>
        
    )
}

export default User;