import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteCoverImg } from "../../../state/actions/profile-action";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";


const DeleteCover = () => {

    const dispatch = useDispatch();
    const deletePhotoHandler = () => dispatch(deleteCoverImg());

    return(

        <div className="border-2 border-primaryColor rounded-full absolute top-4 right-14 transition-opacity hover:opacity-90">
            <IconButton onClick={()=> Alert(deletePhotoHandler, "cover")} className="rounded-full p-0 bg-primary w-8 h-8 flex justify-center items-center">
                <MdDelete className="text-xl text-primaryColor"/>
            </IconButton>
        </div>
        
    )
}

export default DeleteCover;