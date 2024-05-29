import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { followUser } from "../../../state/actions/profile-action";

const FollowUser = ({profile, like}) => {

    const dispatch = useDispatch();
    const followUserHandler = () => dispatch(followUser(profile.id, like))
    const {user} = useSelector(state => state.auth)

    const isFollowing = () => profile.followers.some((follower) => follower.userId == user.id);

    useEffect(()=> {isFollowing()}, [profile.followers.length])

    return(
        <>
        {
            user.id != profile.id && 
            <div onClick={followUserHandler}>{ isFollowing() ? 
                <Button variant="filled" className="flex justify-center items-center w-28 h-8 bg-transparent border-2 border-primaryColor text-primaryColor shadow-none font-extrabold">UnFollow</Button> 
                :<Button variant="filled" className="flex justify-center items-center w-28 h-8 bg-main text-white font-extrabold">Follow</Button>} 
            </div>
        }
        </>
        
    )
}

export default FollowUser;