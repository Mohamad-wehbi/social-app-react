import { BiSolidShareAlt } from "react-icons/bi";
import MenuPost from "./menu-post";
import PostComments from "../comment/post-comments";
import AddLike from "./addLike";
import Likes from "./likes";
import IsAuth from "../../global/isAuth";
import UserInfo from "../../global/user-info";


const Post = ({post}) => {


    return(
        <div className="card">
            <div className="mx-[-15px]">

                <UserInfo image={post.user.profilePicUrl} username={post.user.username} userId={post.userId} desc={post.createdAt}>
                    <IsAuth userId={post.userId}>
                        <MenuPost post={post}/>
                    </IsAuth>
                </UserInfo>

                <p className="pt-3 font-bold text-primaryColor">{post.desc}</p>
                <img src={post.image} alt="post" className="rounded-md mt-1 mb-3" />
                <div className="flex gap-3">
                    <Likes likes={post.likes}/>
                    <div className="transition-opacity hover:opacity-50 font-extrabold text-primaryColor py-2">
                        {post.comments.length} Comments
                    </div>
                </div>
                <div className="flex gap-2 items-center text-2xl text-primaryColor ml-[-10px]">
                    <AddLike post={post}/>
                    <PostComments post={post}/>
                    <BiSolidShareAlt/>
                </div>
            </div>
        </div>
    )
}

export default Post;