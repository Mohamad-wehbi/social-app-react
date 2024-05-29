import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../../state/actions/profile-action";
import { Button, Input } from "@material-tailwind/react";
import { toast } from "sonner";
import { FaCheckCircle } from "react-icons/fa";
import { validateUpdateUsername } from "../../../validation/profile";
import { ErrorParagraph } from "../../global/error-paragraph";

const ProfileUsername = ({name, userId}) => {

   const [open, setOpen] = useState(false);
   const [username, setUsername] = useState(name);
   const [errors, setErrors] = useState({});
   const dispatch = useDispatch();
   const {user} = useSelector(state => state.auth);
   const {updatedUsername} = useSelector(state => state.profile);

   const updateProfileUsername = (event) =>{
      event.preventDefault();
      const {validationErrors, err} = validateUpdateUsername({username});
      setErrors(validationErrors)
      if(err) return;
      if(username == name) return toast.error("There is no updating in username");
      dispatch(updateUsername({username}, setOpen));
   }

    return(
        <>
            {
                open?
                <form onDoubleClick={()=>setOpen(false)} onSubmit={updateProfileUsername} className="w-full mb-4 flex flex-col">
                    <div className="w-full flex justify-between items-end">
                        <Input className="border-none text-primaryColor" value={username} onChange={(e)=>setUsername(e.target.value)} variant="standard"/>
                        <Button type="submit" loading={updatedUsername} className="p-0 m-0 w-8 h-8 flex justify-center items-center" variant="text">
                            {!updatedUsername?<FaCheckCircle className="w-full h-full text-xl text-main"/>: null}
                        </Button>
                    </div>
                    <ErrorParagraph err={errors.username}/>
                </form>
                :<h2 onDoubleClick={()=> setOpen(v => user.id == userId? true : false)} className="font-bold text-xl text-primaryColor">{name}</h2> 
            }
            
        </>
    )
}

export default ProfileUsername;