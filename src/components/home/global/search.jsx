import { Dialog, DialogBody, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import Loader from "../../global/loader";
import User from "../user/user";
import UserSkeleton from "../user/user-skeleton";

const Search = ({children, profiles, handler, loading, keys}) => {

    const [username, setUsername] = useState("");
    const [open, setOpen] = useState(false);
    
    const usersHandler = () =>{
        setOpen(true);
        handler();
    }

    const renderUsers = () => profiles.map((profile,i)=> <User profile={profile} key={i} />)
    const filterUsers = () => profiles.filter((profile)=> profile.username.toLowerCase().includes(username.toLowerCase()));
    const searchUsers = () => filterUsers().map((profile,i)=> <User profile={profile} key={i} />)


    return(
        <>
           <div className={`transition-opacity hover:opacity-50 ${keys&&"w-1/3"}`} onClick={usersHandler}>
                {children}
           </div>
           <Dialog open={open} handler={()=>setOpen(!open)} size="xs" className="bg-primary">
                <DialogHeader className="pb-0">
                    <form className="w-full">
                        <Input onChange={(e)=>setUsername(e.target.value)} variant="outlined" color="blue-gray" className="text-primaryColor placeholder:text-primaryColor" label="Search Users"/>
                    </form>
                </DialogHeader>
                <DialogBody className="px-3">
                    <div className="flex flex-col gap-1 max-h-[700px] min-h-[700px] overflow-auto">
                        <Loader loading={loading} data={profiles.length} skeleton={<UserSkeleton/>} count={5}>
                            { username ? searchUsers() : keys ? renderUsers() : null }
                        </Loader>
                    </div>
                </DialogBody>
          </Dialog>
        </>

    )
}

export default Search;