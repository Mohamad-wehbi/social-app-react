import { useDispatch } from "react-redux";
import {deleteMyPost} from "../../../state/actions/post-action"
import { Alert } from "../../../utils/sweetAlert";
import { MdDelete } from "react-icons/md";
   
  const DeleteuPost = ({postId}) => {

    const dispatch = useDispatch();
    const deletePostHandler = () => dispatch(deleteMyPost(postId))

    return (
      
        <div onClick={()=> Alert(deletePostHandler, "post")} className="flex items-center gap-4 py-2 pl-2 pr-8">
            <MdDelete className="text-xl"/>
            <div>Delete</div>
        </div>
          
    );
    }
  export default DeleteuPost;