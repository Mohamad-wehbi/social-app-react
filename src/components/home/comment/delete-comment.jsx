import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteMyComment } from "../../../state/actions/comment-action";
import { MdDelete } from "react-icons/md";
   
  const DeleteComment = ({commentId, postId, setMenu}) => {

    const dispatch = useDispatch();
    const deleteCommentHandler = () =>{
      setMenu(false)
      dispatch(deleteMyComment(commentId, postId))
    } 
    

    return (
      
        <div onClick={()=> Alert(deleteCommentHandler, "comment")} className="flex items-center justify-center gap-2">
            <MdDelete className="text-xl"/>
            <div>Delete</div>
        </div>
    );
  }


  export default DeleteComment;