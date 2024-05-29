import UserInfo from "../../global/user-info";
import DeletePostAdmin from "./delete-post";

const PostAdmin = ({post}) => {

    return(
       
        <div className="text-primaryColor border-2 border-gray-800 rounded-lg px-3 py-4">
            <UserInfo image={post.user.profilePicUrl} username={post.user.username} userId={post.userId} desc={post.createdAt}>
                <DeletePostAdmin postId={post.id}/>
            </UserInfo>
            <p className="mt-6">{post.desc}</p>
            <img src={post.image} alt="post" className="rounded-md mt-2 mb-4" />
            <p className="cursor-pointer text-sm">{post.likes.length} likes</p>
        </div>
      
    )
}

export default PostAdmin;