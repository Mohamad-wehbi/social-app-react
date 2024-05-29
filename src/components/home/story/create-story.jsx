import { MdOutlineAddCircle } from "react-icons/md";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import {createStory} from "../../../state/actions/story-action"
import { useDispatch, useSelector } from "react-redux";
import { validateCreateStory } from "../../../validation/story";
import { ErrorParagraph } from "../../global/error-paragraph";

const CreateStory = () => {

    const [values, setValues] = useState({file:"", desc:""});
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const {created} = useSelector(state => state.story);

    const handleChange = event => {
        let { name, value, files } = event.target;
        name == "file"? setValues({ ...values, [name] : files[0] }):setValues({ ...values, [name] : value });
    }

    const createStoryHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateCreateStory(values);
        setErrors(validationErrors)
        if(err) return;
        const formData = new FormData();
        formData.append("image", values.file);
        formData.append("desc", values.desc);
        dispatch(createStory(formData, setOpen))
    }

    return(
        <>
            <div className="transition-opacity hover:opacity-50" onClick={()=>setOpen(true)}>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <MdOutlineAddCircle className="text-main rounded-full border-4 border-main w-16 h-16" />
                    <h2 className="font-bold text-primaryColor">Add</h2>
                </div>
            </div>
            <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Create Story.</DialogHeader>
                <form onSubmit={createStoryHandler}>
                    <DialogBody>
                        <div className="w-full flex flex-col items-center">
                            <Input onChange={handleChange} color="blue-gray" variant="standard" label="What do you think" name="desc" className="text-primaryColor placeholder:text-primaryColor"/>
                            <ErrorParagraph err={errors.desc}/>
                            <label htmlFor="file" className="block mt-8 h-96 w-full rounded-lg bg-gray-800 relative">
                                {
                                values.file? <>
                                        <img src={URL.createObjectURL(values.file)} alt="image" className="h-full w-full object-cover rounded-lg" />
                                        <BiSolidPencil className="text-lg text-primary cursor-pointer absolute top-3 right-3"/>
                                        </>
                                    : <div className="h-full w-full grid cursor-pointer place-items-center"><HiOutlinePhoto className="text-5xl text-primaryColor" /></div>
                                }     
                            </label>
                            <input type="file" name="file" id="file" className="hidden" onChange={handleChange}/>
                            <ErrorParagraph err={errors.file}/>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button variant="text" color="red" onClick={()=>setOpen(false)} className="mr-1">Cancel</Button>
                        <Button loading={created} type="submit" variant="gradient" color="green">Confirm</Button>
                    </DialogFooter>
                </form>  
            </Dialog>
        </>
    )
}

export default CreateStory;