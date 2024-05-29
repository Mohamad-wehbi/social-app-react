import { BiSolidCamera } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileImg } from "../../../state/actions/profile-action";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "@material-tailwind/react";

const UpdatePhoto = ({file, setFile, profilePicUrl}) => {

   const dispatch = useDispatch();
   const {updatedPhoto} = useSelector(state => state.profile);

   const clearForms = () => { setFile(null) }

   const updateProfilePhoto = () =>{
      if(!file || file === profilePicUrl) return toast.error("image is required");
      const formData = new FormData();
      formData.append("profileImg", file);
      dispatch(updateProfileImg(formData, clearForms));
   }

    return(
        <>
        <div className="bg-primary rounded-full absolute bottom-1 right-1 z-50 border-2 border-primaryColor transition-opacity hover:opacity-90">
            {
                file? 
                <Button loading={updatedPhoto} className="p-0 w-8 h-8 flex justify-center items-center" variant="text">
                    {!updatedPhoto?<FaCheckCircle onClick={updateProfilePhoto} className="w-full h-full text-xl text-main"/>: null}
                </Button>
                :<label htmlFor="file" className="w-8 h-8 flex justify-center items-center cursor-pointer"><BiSolidCamera className="text-xl text-primaryColor cursor-pointer"/></label>
            }
        </div>
        {!file? <input type="file" name="file" id="file" className="hidden" onChange={(e)=>setFile(e.target.files[0])}/> : null}
        </>
        
            )
}

export default UpdatePhoto;