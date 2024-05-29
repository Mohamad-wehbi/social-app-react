import UsersCount from "../users/users-count";
import StoriesCount from "../stories/stories-count";
import PostsCount from "../posts/posts-count";
import CommentsCount from "../comments/comments-count";

const StatisticsAdmin = () => {

    return(
                    
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-2 h-full">
        <UsersCount/>
        <StoriesCount/>
        <PostsCount/>
        <CommentsCount/>
        </div>
)
}

export default StatisticsAdmin;