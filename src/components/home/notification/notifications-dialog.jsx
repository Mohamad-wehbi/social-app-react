import { Badge, Dialog, DialogHeader, IconButton } from "@material-tailwind/react";
import Notifications from "./notifications";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";

const NotificationsDialog = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className="2xl:hidden">
            <IconButton onClick={()=>setOpen(true)} variant="text" className="text-primaryColor text-2xl -mb-3">
                <Badge className="bg-main">
                    <FaRegBell/>
                </Badge>
            </IconButton>

           <Dialog open={open} handler={()=>setOpen(!open)} size="sm" className="bg-transparent">
                <Notifications />
            </Dialog>
        </div>
        
    )
}

export default NotificationsDialog;