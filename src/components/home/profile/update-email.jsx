import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateEmail } from "../../../state/actions/profile-action";
import { toast } from "sonner";
import { validateUpdateEmail } from "../../../validation/profile";
import { ErrorParagraph } from "../../global/error-paragraph";

const UpdateEmail = ({profile}) => {

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState(profile.email);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const {updatedEmail} = useSelector(state => state.profile);


    const updateProfileHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateUpdateEmail({email});
        setErrors(validationErrors)
        if(err) return;
        if(email == profile.email) return toast.error("There is no updating in email");
        dispatch(updateEmail({email}, setOpen));
    }

    return(
        <>

           <IconButton onClick={()=>setOpen(true)} variant="text" className="text-primaryColor text-lg mt-[-10px]">
                <BiSolidPencil/>
           </IconButton>

           <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Update Email.</DialogHeader>
            
                <form onSubmit={updateProfileHandler} className="w-full">
                    <DialogBody className="w-full flex flex-col">  
                        <Input value={email} type="text" label="Email" color="blue-gray" onChange={(v)=> setEmail(v.target.value)} className="text-primaryColor placeholder:text-primaryColor" icon={<BiSolidPencil/>} />
                        <ErrorParagraph err={errors.email}/>
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="text" color="red" onClick={()=>setOpen(false)} className="mr-1">Cancel</Button>
                        <Button loading={updatedEmail} type="submit" variant="gradient" color="green">Confirm</Button>
                    </DialogFooter>              
                </form>

            </Dialog>
        </>
        
    )
}

export default UpdateEmail;