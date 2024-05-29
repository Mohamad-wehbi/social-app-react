import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteComment } from "../../../state/actions/comment-action";
import { MdDelete } from "react-icons/md";

const DeleteCommentAdmin = ({commentId}) => {

    const dispatch = useDispatch();
    const deleteCommentAdmin = () => dispatch(deleteComment(commentId));

    return(
        
        <div className="transition-opacity hover:opacity-50" onClick={()=> Alert(deleteCommentAdmin, "comment")}>
            <MdDelete className="p-1 text-primaryColor bg-main text-2xl rounded-full"/>
        </div>
    )
}

export default DeleteCommentAdmin;