import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteProfileImg } from "../../../state/actions/profile-action";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";


const DeletePhoto = () => {

    const dispatch = useDispatch();
    const deletePhotoHandler = () => dispatch(deleteProfileImg());

    return(

        <div className="absolute left-0 rounded-full top-0 w-full h-full opacity-0 group-hover:opacity-100">
            <div className="flex justify-center items-center h-full">
                <IconButton onClick={()=> Alert(deletePhotoHandler, "photo")} className="rounded-full p-0 bg-primary w-8 h-8 flex justify-center items-center">
                    <MdDelete className="text-red-900 text-xl"/>
                </IconButton>
            </div>
        </div>
    )
}

export default DeletePhoto;