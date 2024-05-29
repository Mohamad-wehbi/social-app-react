import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateMe } from "../../../state/actions/profile-action";
import { toast } from "sonner";
import { validateUpdateProfile } from "../../../validation/profile";
import { ErrorParagraph } from "../../global/error-paragraph";

const UpdateProfile = ({profile}) => {

    const { countries } = useCountries();
    const defaultValues = {status:profile.status, worksAt:profile.worksAt, livesin:profile.livesin, bio:profile.bio};

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const {updatedInfo} = useSelector(state => state.profile);

    const handleChange = event => {
        let { name, value } = event.target;
        setValues({ ...values, [name] : value });
        name == "status" || name == "livesin"?
        setValues({ ...values, [name] : event }):
        setValues({ ...values, [name] : value });
    }

    const updateProfileHandler = (event) =>{
        event.preventDefault();
        const {status, worksAt, livesin, bio} = values;
        const data = {};
        if(status && status !== profile.status) data.status = status;
         if(worksAt && worksAt !== profile.worksAt) data.worksAt = worksAt;
         if(livesin && livesin !== profile.livesin) data.livesin = livesin;
         if(bio && bio !== profile.bio) data.bio = bio;
         if(!data.status && !data.worksAt && !data.livesin && !data.bio) return toast.error("there is no data updated");
        const {validationErrors, err} = validateUpdateProfile(data);
        setErrors(validationErrors)
        if(err) return;
        dispatch(updateMe(data, setOpen));
    }

    return(
        <>

           <IconButton onClick={()=>setOpen(true)} variant="text" className="text-primaryColor text-lg mt-[-10px]">
                <BiSolidPencil/>
           </IconButton>

           <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Update Informations.</DialogHeader>
            
                <form onSubmit={updateProfileHandler} className="w-full">
                    <DialogBody className="w-full flex flex-col gap-5">  
                        <Input value={values.worksAt} name="worksAt" color="blue-gray" type="text" label="Company" onChange={handleChange} icon={<BiSolidPencil/>} className="text-primaryColor placeholder:text-primaryColor" />
                        <ErrorParagraph err={errors.worksAt}/>

                        <Select value={values.status} name="status" color="blue-gray" label="Select Your Status" onChange={handleChange} className="text-primaryColor placeholder:text-primaryColor">
                            <Option value="SINGLE">Single</Option>
                            <Option value="MARRIED">Married</Option>
                            <Option value="SEPARATE">Separate</Option>
                            <Option value="WIDOWER">Widower</Option>
                        </Select>
                        <ErrorParagraph err={errors.status}/>

                        <Select value={values.livesin} color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" name="livesin" size="lg" label="Select Country" onChange={handleChange} selected={(element) =>element &&React.cloneElement(element, {disabled: true,className:"flex items-center opacity-100 px-0 gap-2 pointer-events-none"})}>
                            {countries.map(({ name, flags }) => (
                            <Option key={name} value={name} className="flex items-center gap-2">
                                <img src={flags.svg}alt={name}className="h-5 w-5 rounded-full object-cover"/>{name}
                            </Option>))}
                        </Select>
                        <ErrorParagraph err={errors.livesin}/>
                        
                        <div className="w-96" onChange={handleChange}>
                            <Textarea value={values.bio} name="bio" color="blue-gray" label="Bio" className="text-primaryColor placeholder:text-primaryColor" />
                            <ErrorParagraph err={errors.bio}/>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="text" color="red" onClick={()=>setOpen(false)} className="mr-1">Cancel</Button>
                        <Button loading={updatedInfo} type="submit" variant="gradient" color="green">Confirm</Button>
                    </DialogFooter>              
                </form>

            </Dialog>
        </>
        
    )
}

export default UpdateProfile;