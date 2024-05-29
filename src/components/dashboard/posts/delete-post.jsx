import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deletePost } from "../../../state/actions/post-action";
import { MdDelete } from "react-icons/md";

const DeletePostAdmin = ({postId}) => {

    const dispatch = useDispatch();
    const deletePostAdmin = () => dispatch(deletePost(postId));

    return(
        
        <div className="transition-opacity hover:opacity-50" onClick={()=> Alert(deletePostAdmin, "post")}>
            <MdDelete className="p-1 text-primaryColor bg-main text-2xl rounded-full"/>
        </div>
    )
}

export default DeletePostAdmin;