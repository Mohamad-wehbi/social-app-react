import { BiSolidPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateCoverImg } from "../../../state/actions/profile-action";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "@material-tailwind/react";

const UpdateCover = ({file, setFile, coverPicUrl}) => {

   const dispatch = useDispatch();
   const {updatedCover} = useSelector(state => state.profile);

   const clearForms = () => { setFile(null) }

   const updateProfileCover = () =>{
      if(!file || file === coverPicUrl) return toast.error("image is required");
      const formData = new FormData();
      formData.append("coverImg", file);
      dispatch(updateCoverImg(formData, clearForms));
   }

    return(
        <>
        <div className="bg-primary rounded-full border-2 border-primaryColor absolute top-4 right-4 transition-opacity hover:opacity-90">
            {
                file? 
                <Button loading={updatedCover} className="p-0 w-8 h-8 flex justify-center items-center" size="md" variant="text">
                    {!updatedCover?<FaCheckCircle onClick={updateProfileCover} className="w-full h-full text-xl text-main"/>: null}
                </Button>
                :<label htmlFor="cover" className="w-8 h-8 cursor-pointer flex justify-center items-center" ><BiSolidPencil className="text-xl text-primaryColor"/></label>
            }
        </div>                 
        {!file? <input type="file" name="file" id="cover" className="hidden" onChange={(e)=>setFile(e.target.files[0])}/>: null}
        </>

                        )
}

export default UpdateCover;