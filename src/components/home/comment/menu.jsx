import { MenuHandler, MenuList, MenuItem, IconButton} from "@material-tailwind/react";
import { SlOptionsVertical } from "react-icons/sl";
import DeleteComment from "./delete-comment";
import OpenInput from "./open-input";
   
  const Menu = ({comment, setOpen}) => {

    return (
      
        <>
            <div className="relative">

            <IconButton variant="text" size="lg" className="mr-[-15px]" onClick={()=>setOpen(!open)}>
                <SlOptionsVertical className="text-main" />
            </IconButton>

            </div>

            {open &&

                <div className="absolute bottom-0 right-0">
                    <div className="flex flex-col gap-2 w-15 h-15 bg-deep-orange-400">  
                        <div>
                            <DeleteComment commentId={comment.id} postId={comment.postId}/>
                        </div>

                        <div>
                            <OpenInput setOpen={setOpen}/>
                        </div>
                    </div>
                </div>
            }
        </>
            

            
          
        
      
    );
  }


  export default Menu;