import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from "../../../state/actions/comment-action";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "sonner";
import { validateUpdateComment } from "../../../validation/comment";
import { ErrorParagraph } from "../../global/error-paragraph";

const UpdateComment = ({comment, setOpen}) => {

    const [desc, setDesc] = useState(comment.desc);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const {updated} = useSelector(state => state.comment);

    const updateCommentHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateUpdateComment({desc});
        setErrors(validationErrors)
        if(err) return;
        if(desc === comment.desc) return toast.error("There is no updating in description");
        dispatch(updateComment(comment.id, {desc}, setOpen));
    }

    return(
        <div onDoubleClick={()=>setOpen(false)} className="w-full flex flex-col items-center">
            <form onSubmit={updateCommentHandler} className="w-full flex justify-between items-end">
                <Input className="border-none text-primaryColor" value={desc} onChange={(e)=>setDesc(e.target.value)} variant="standard"/>
                <Button type="submit" loading={updated} className="p-0 m-0 w-8 h-8 flex justify-center items-center" variant="text">
                    {!updated?<FaCheckCircle className="w-full h-full text-xl text-main"/>: null}
                </Button>
            </form>
            <ErrorParagraph err={errors.desc}/>
        </div>
        
    )
}

export default UpdateComment;