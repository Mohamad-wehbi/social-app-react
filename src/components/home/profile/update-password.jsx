import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateMyPassword } from "../../../state/actions/profile-action";
import { validateUpdatePassword } from "../../../validation/profile";
import { ErrorParagraph } from "../../global/error-paragraph";

const UpdatePassword = () => {

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({password:"", newPassword:"", confirmNewPassword:""});
    const [errors, setErrors] = useState({});
    
    const dispatch = useDispatch();
    const {updatedPass} = useSelector(state => state.profile);

    const handleChange = event => {
        let { name, value } = event.target;
        setValues({ ...values, [name] : value });
    }

    const updatePassworHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateUpdatePassword(values);
        setErrors(validationErrors)
        if(err) return;
        dispatch(updateMyPassword(values, setOpen));
    }

    return(
        <>
           <IconButton onClick={()=>setOpen(true)} variant="text" className="text-primaryColor text-lg mt-[-10px]">
                <BiSolidPencil/>
           </IconButton>

           <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Update Password.</DialogHeader>
            
                <form onSubmit={updatePassworHandler} className="w-full">
                    <DialogBody className="w-full flex flex-col gap-5">
                        <div className="w-full">
                            <Input value={values.password} name="password" color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" type="text" label="Password" onChange={handleChange} icon={<BiSolidPencil/>} />
                            <ErrorParagraph err={errors.password}/>
                        </div>
                        <div className="w-full">
                            <Input value={values.newPassword} name="newPassword" color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" type="text" label="New password" onChange={handleChange} icon={<BiSolidPencil/>} />
                            <ErrorParagraph err={errors.newPassword}/>
                        </div>
                        <div className="w-full">
                            <Input value={values.confirmNewPassword} name="confirmNewPassword" color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" type="text" label="Confirm new password" onChange={handleChange} icon={<BiSolidPencil/>} />
                            <ErrorParagraph err={errors.confirmNewPassword}/>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="text" color="red" onClick={()=>setOpen(false)} className="mr-1">Cancel</Button>
                        <Button loading={updatedPass} type="submit" variant="gradient" color="green">Confirm</Button>
                    </DialogFooter>              
                </form>

            </Dialog>
        </>
        
    )
}

export default UpdatePassword;