import UserInfo from "../../global/user-info";
import DeleteCommentAdmin from "./delete-comment";

const CommentAdmin = ({comment}) => {

    return(
       
        <div className="bg-primary border-2 border-gray-800 rounded-lg p-4">
            <UserInfo image={comment.user.profilePicUrl} username={comment.user.username} userId={comment.userId} desc={comment.createdAt}>
                <DeleteCommentAdmin commentId={comment.id}/>
            </UserInfo>
            <p className="mt-3 text-primaryColor">{comment.desc}</p>
        </div>
      
    )
}

export default CommentAdmin;