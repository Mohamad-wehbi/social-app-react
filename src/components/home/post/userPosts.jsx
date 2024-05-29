import Loader from "../../global/loader";
import Post from "./post"
import { useSelector } from "react-redux";
import PostSkeleton from "./post-skeleton";

const UserPosts = () => {

    const {userPosts} = useSelector(state => state.post);
    const renderPosts = () => userPosts.map((post,i)=><Post post={post} key={i}/>)
    const {loadingProfile} = useSelector(state=> state.profile);

    return(
        <div className="flex flex-col gap-2 mb-2">
            <Loader loading={!true} data={true} skeleton={<PostSkeleton/>} count={4}>
                {renderPosts()}
            </Loader>
        </div>
    )
}

export default UserPosts;