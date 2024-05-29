import { useEffect } from "react";
import Post from "./post"
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../../../state/actions/post-action";
import Loader from "../../global/loader";
import PostSkeleton from "./post-skeleton";

const FollowingPosts = () => {

    const dispatch = useDispatch();
    const {profile} = useSelector(state=> state.profile);
    
    useEffect(()=> {dispatch(getFollowingPosts())}, [profile.following])
    const {followingPosts, loadingFollowingPosts} = useSelector(state => state.post);

    const renderPosts = () => followingPosts.map((post,i)=><Post post={post} key={i}/>)


    return(

        <div className="flex flex-col gap-2 mb-2">
            <Loader loading={loadingFollowingPosts} data={followingPosts.length} skeleton={<PostSkeleton/>} count={4}>
                {renderPosts()}
            </Loader>
        </div>
    )
}

export default FollowingPosts;