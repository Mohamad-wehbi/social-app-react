import { useState } from "react";
import IsAuth from "../../global/isAuth";
import DeletePhoto from "./delete-photo";
import UpdatePhoto from "./update-photo";

const ProfilePhoto = ({profilePicUrl, userId}) => {

   const [file, setFile] = useState(null);

    return(
        
        <div className="group rounded-full border-[4px] border-main bg-primary translate-y-[-50%] mb-[-60px] relative">
            <img className="w-32 h-32 object-cover rounded-full m-[3px] group-hover:blur-sm" src={file?URL.createObjectURL(file): profilePicUrl} alt="photo" />
            
            <IsAuth userId={userId}>
                <UpdatePhoto file={file} setFile={setFile} profilePicUrl={profilePicUrl}/>
                <DeletePhoto />
            </IsAuth>
        </div>
    )
}

export default ProfilePhoto;