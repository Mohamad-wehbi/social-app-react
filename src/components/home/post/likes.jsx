import { Dialog, DialogBody, DialogHeader, Input } from "@material-tailwind/react";
import User from "../../home/user/user";
import { useState } from "react";

const Likes = ({likes}) => {

    const [username, setUsername] = useState("");
    const [open, setOpen] = useState(false);

    const renderUsers = () => likes.map((like,i)=> <User profile={like.user} like={like} key={i} />)
    const filterUsers = () => likes.filter((like)=> like.user.username.toLowerCase().includes(username.toLowerCase()));
    const searchUsers = () => filterUsers().map((like,i)=> <User profile={like.user} like={like} key={i} />)


    return(
        <>
           <div className="transition-opacity hover:opacity-50" onClick={()=>setOpen(true)}>
                <p className="py-2 font-extrabold text-primaryColor">{likes.length} Likes</p>
           </div>
           <Dialog open={open} handler={()=>setOpen(!open)} size="xs" className="bg-primary">
                <DialogHeader className="pb-0">
                    <form className="w-full">
                        <Input onChange={(e)=>setUsername(e.target.value)} variant="outlined" color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" label="Search Users"/>
                    </form>
                </DialogHeader>
                <DialogBody className="px-3">
                    <div className="flex flex-col gap-1 max-h-[700px] min-h-[700px] overflow-auto">
                        { username ? searchUsers() : renderUsers() }
                    </div>
                </DialogBody>
          </Dialog>
        </>

    )
}

export default Likes;




