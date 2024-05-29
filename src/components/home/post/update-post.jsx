import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../state/actions/post-action";
import { validateUpdatePost } from "../../../validation/post";
import { ErrorParagraph } from "../../global/error-paragraph";

const UpdatePost = ({post, open, setOpen}) => {

    const [values, setValues] = useState({file:"", desc:post.desc});
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const {updated} = useSelector(state => state.post);

    const handleChange = event => {
        let { name, value, files } = event.target;
        name == "file"? setValues({ ...values, [name] : files[0] }):setValues({ ...values, [name] : value });
    }

    const updatePostHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateUpdatePost(values);
        setErrors(validationErrors)
        if(err) return;
        const formData = new FormData();
        formData.append("image", values.file);
        formData.append("desc", values.desc);
        dispatch(updatePost(post.id, formData, setOpen))
    }

    
    return(
        <>
           
           <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-primary">
                <DialogHeader className="text-primaryColor">Update Post.</DialogHeader>
                    <form onSubmit={updatePostHandler}>
                        <DialogBody>
                            <Input name="desc" onChange={handleChange} color="blue-gray" variant="standard" label="What do you think" value={values.desc} className="text-primaryColor placeholder:text-primaryColor"/>
                            <ErrorParagraph err={errors.desc}/>
                            <label htmlFor="file" className="block mt-8 h-96 w-full rounded-lg bg-gray-800 relative">
                                {
                                    values.file? <>
                                            <img src={URL.createObjectURL(values.file) || post.image} alt="image" className="h-full w-full object-cover rounded-lg" />
                                            <BiSolidPencil className="text-lg text-primary cursor-pointer absolute top-3 right-3"/>
                                        </>
                                        : <div className="h-full w-full grid cursor-pointer place-items-center"><HiOutlinePhoto className="text-5xl text-primaryColor" /></div>
                                }     
                            </label>
                            <input type="file" name="file" id="file" className="hidden" onChange={handleChange}/>
                            <ErrorParagraph err={errors.file}/>
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="text" color="red" onClick={()=>setOpen(false)} className="mr-1">Cancel</Button>
                            <Button loading={updated} type="submit" variant="gradient" color="green">Confirm</Button>
                        </DialogFooter>
                    </form>
                
          </Dialog>
        </>
        
    )
}

export default UpdatePost;