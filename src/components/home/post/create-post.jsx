import { MdAddPhotoAlternate } from "react-icons/md";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import {createPost} from "../../../state/actions/post-action"
import { useDispatch, useSelector } from "react-redux";
import { validateCreatePost } from "../../../validation/post";
import { ErrorParagraph } from "../../global/error-paragraph";

const CreatePost = () => {

    const [values, setValues] = useState({file:"", desc:""});
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const {created} = useSelector(state => state.post);

    const handleChange = event => {
        let { name, value, files } = event.target;
        name == "file"? setValues({ ...values, [name] : files[0] }):setValues({ ...values, [name] : value });
    }

    const createPostHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateCreatePost(values);
        setErrors(validationErrors)
        if(err) return;
        const formData = new FormData();
        formData.append("image", values.file);
        formData.append("desc", values.desc);
        dispatch(createPost(formData, setOpen))
    }

    return(
        <>
            <div className="cursor-pointer transition-opacity hover:opacity-90" onClick={()=>setOpen(true)}>
                <IconButton variant="text" size="lg" className="mr-[-15px] mb-[-7px]">
                    <MdAddPhotoAlternate className="text-main text-3xl" />
                </IconButton>
            </div>
            <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Create Post.</DialogHeader>
                <form onSubmit={createPostHandler}>
                    <DialogBody>
                        <div className="w-full flex flex-col items-center">
                            <Input name="desc" onChange={handleChange} color="blue-gray" variant="standard" label="What do you think" className="text-primaryColor placeholder:text-primaryColor"/>
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

export default CreatePost;