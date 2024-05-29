import { useDispatch, useSelector } from "react-redux";
import { getFollowingUser } from "../../../state/actions/profile-action";
import Search from "../global/search";

const UserFollowing = ({id, followingCount}) => {

    const dispatch = useDispatch();
    const getFollowing = () => dispatch(getFollowingUser(id));

   const { following,loadingFollowing } = useSelector(state => state.profile)


    return(
        <Search loading={loadingFollowing} profiles={following} handler={getFollowing} keys={true}>
            <div className="flex flex-col items-center border-r-4 border-secondry">
                <span className="text-primaryColor">{followingCount}</span>
                <p>Following</p>
            </div>
        </Search>
        
    )
}

export default UserFollowing;