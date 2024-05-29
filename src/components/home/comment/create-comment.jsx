import { IconButton, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../state/actions/comment-action";
import { FaFaceSmile } from "react-icons/fa6";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { ErrorParagraph } from "../../global/error-paragraph";
import { validateCreateComment } from "../../../validation/comment";

const CreateComment = ({postId}) => {

    const [desc, setDesc] = useState(null);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const addCommentHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateCreateComment({desc});
        setErrors(validationErrors)
        if(err) return;
        dispatch(createComment({desc, postId}));
    }

    return(
        
        <div className="w-full mt-5 flex flex-col items-center">
            <div><ErrorParagraph err={errors.desc}/></div>
            <form onSubmit={addCommentHandler} className="w-full flex justify-between">
                <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
                    <div className="flex">
                        <IconButton variant="text" className="text-primaryColor text-2xl"><BiSolidShoppingBagAlt/></IconButton>
                        <IconButton variant="text" className="text-primaryColor text-xl"><FaFaceSmile /></IconButton>
                    </div>
                    <Textarea
                        onChange={(e)=>setDesc(e.target.value)} 
                        rows={1}
                        color="blue-gray"
                        placeholder="Your Message"
                        className="min-h-full !border-0 focus:border-transparent text-primaryColor placeholder:text-primaryColor"
                        containerProps={{className: "grid h-full"}}
                        labelProps={{className: "before:content-none after:content-none"}} />
                    <div><IconButton type="submit" variant="text" className="text-primaryColor text-2xl"><MdSend /></IconButton></div>
                </div>
            </form>
        </div>  
    )
}

export default CreateComment;