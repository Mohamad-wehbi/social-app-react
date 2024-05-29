import { useDispatch, useSelector } from "react-redux";
import { getFollowersUser } from "../../../state/actions/profile-action";
import Search from "../global/search";

const UserFollowers = ({id, followersCount}) => {

    const dispatch = useDispatch();
    const getFollowers = () => dispatch(getFollowersUser(id));

   const { loadingFollowers, followers } = useSelector(state => state.profile)


    return(

        <Search loading={loadingFollowers} profiles={followers} handler={getFollowers} keys={true}>
            <div className="flex flex-col items-center border-r-4 border-secondry">
                <span className="text-primaryColor">{followersCount}</span>
                <p>followers</p>
            </div>
        </Search>
    )
}

export default UserFollowers;