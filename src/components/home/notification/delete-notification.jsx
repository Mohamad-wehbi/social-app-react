import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteNotification } from "../../../state/actions/notification-action";
import { IconButton } from "@material-tailwind/react";

const DeleteNotification = ({notificationId}) => {

    const dispatch = useDispatch();
    const deleteStoryHandler = () => dispatch(deleteNotification(notificationId));

    return(

        <IconButton onClick={deleteStoryHandler} variant="text" className="text-main text-xl">
            <IoClose/>
        </IconButton>
    )
}

export default DeleteNotification;