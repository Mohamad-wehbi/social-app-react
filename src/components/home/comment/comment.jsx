import MenuComment from "./menu-comment";
import { useState } from "react";
import UpdateComment from "./update-comment";
import IsAuth from "../../global/isAuth";
import UserInfo from "../../global/user-info";

const Comment = ({comment}) => {

    const [open, setOpen] = useState(false);

    return(
       
        <div className="card relative">
            <UserInfo image={comment.user.profilePicUrl} username={comment.user.username} userId={comment.userId} desc={comment.createdAt}>
                <IsAuth userId={comment.userId}>
                    <MenuComment comment={comment} setOpen={setOpen}/>
                </IsAuth>            
            </UserInfo>
            {open? <UpdateComment comment={comment} setOpen={setOpen}/> : <p className="font-bold text-primaryColor">{comment.desc}</p>}
        </div>
      
    )
}

export default Comment;