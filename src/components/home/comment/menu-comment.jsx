import { IconButton, Button} from "@material-tailwind/react";
import { SlOptionsVertical } from "react-icons/sl";
import DeleteComment from "./delete-comment";
import OpenInput from "./open-input";
import { useState } from "react";
   
  const MenuComment = ({comment, setOpen}) => {

    const [menu, setMenu] = useState(false);

    return (
      <>
          <div className="relative">
              <IconButton variant="text" size="lg" className="mr-[-15px]" onClick={()=>setMenu(!menu)}>
                    <SlOptionsVertical className="text-main" />
              </IconButton>
              {menu && 

                    <div className="bg-primary absolute p-3 rounded-lg border-2 border-primaryColor top-full -right-5 z-10">
                        <div className="flex flex-col gap-2">  
                            <Button variant="text" color="white" className="text-primaryColor capitalize text-sm" >
                                <DeleteComment commentId={comment.id} postId={comment.postId} setMenu={setMenu}/>
                            </Button>

                            <Button variant="text" color="white" className="text-primaryColor capitalize text-sm">
                                <OpenInput setOpen={setOpen} setMenu={setMenu}/>
                            </Button>
                        </div>
                    </div>
              }
          </div> 
      </>   
    );
  }


  export default MenuComment;