import { useState } from "react";
import IsAuth from "../../global/isAuth";
import UpdateCover from "./update-cover";
import DeleteCover from "./delete-cover";

const ProfileCover = ({coverPicUrl, userId}) => {

   const [file, setFile] = useState(null);
   
    return(
              <div className="w-full h-52 relative">
                 <img className="w-full h-full object-cover rounded-xl" src={file?URL.createObjectURL(file): coverPicUrl} alt="cover" />

                 <IsAuth userId={userId}>
                     <UpdateCover file={file} setFile={setFile} coverPicUrl={coverPicUrl}/>
                     <DeleteCover/>
                 </IsAuth>
              </div>
    )
}

export default ProfileCover;