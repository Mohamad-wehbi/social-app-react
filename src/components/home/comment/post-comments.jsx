import { Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import Comments from "./comments";
import CreateComment from "./create-comment";
import { FaRegCommentDots } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PostComments = ({post}) => {

    const [open, setOpen] = useState(false);

    return(
        <>
           <IconButton onClick={()=>setOpen(true)} variant="text" className="text-primaryColor text-2xl">
                <FaRegCommentDots/>
           </IconButton>
           <Dialog open={open} size="xs" className="mx-0 bg-primary">
                <DialogHeader className="pb-0 flex justify-between text-primaryColor">
                    <div>Comments List.</div>
                    <div onClick={()=>setOpen(false)}><IoClose className="text-main"/></div>
                </DialogHeader>

                <DialogBody className="px-3">
                    <Comments comments={post.comments}/> 
                </DialogBody>

                <DialogFooter>
                    <CreateComment postId={post.id}/>
                </DialogFooter>
          </Dialog>
        </>

    )
}

export default PostComments;