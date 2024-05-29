import FollowingPosts from "../post/followingPosts";
import FollowingStories from "../story/followingStories";

const MainContent = () => {
    return (
        <div className="h-full w-3/3 lg:w-2/3 2xl:w-2/4 flex flex-col gap-2 overflow-auto">
            <FollowingStories/>
            <FollowingPosts/> 
        </div>          
    )
}

export default MainContent;