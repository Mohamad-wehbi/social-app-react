import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteUser } from "../../../state/actions/profile-action";
import { MdDelete } from "react-icons/md";

const DeleteAdminUser = ({userId}) => {

    const dispatch = useDispatch();
    const deleteAdminUserHandler = () => dispatch(deleteUser(userId));

    return(
        
        <div className="transition-opacity hover:opacity-50 w-1/6 pl-3" onClick={()=> Alert(deleteAdminUserHandler, "user")}>
            <MdDelete className="p-1 text-primaryColor bg-main text-2xl rounded-full"/>
        </div>
    )
}

export default DeleteAdminUser;