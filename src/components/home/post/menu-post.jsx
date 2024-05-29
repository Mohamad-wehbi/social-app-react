import {Menu, MenuHandler, MenuList, MenuItem, IconButton} from "@material-tailwind/react";
import UpdatePost from "./update-post";
import { SlOptionsVertical } from "react-icons/sl";
import DeleteuPost from "./delete-post";
import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
   
  const MenuPost = ({post}) => {

    const [open, setOpen] = useState(false);

    return (
      <Menu dismiss={{itemPress: true}} className="bg-primary">
        
        <MenuHandler>
          <IconButton variant="text" size="lg" className="mr-[-15px]">
              <SlOptionsVertical className="text-main" />
          </IconButton>
        </MenuHandler>

        <MenuList className="flex flex-col gap-2 bg-primary font-bold text-primaryColor">  

          <MenuItem>
              <DeleteuPost postId={post.id}/>
          </MenuItem>

          <MenuItem>
              <div className="transition-opacity hover:opacity-50" onClick={()=>setOpen(true)}>
                    <div className="flex items-center gap-4 py-2 pl-2 pr-8">
                        <BiSolidPencil className="text-xl" />
                        <div>Update</div>
                    </div>
                </div>
          </MenuItem>
        </MenuList>

        <UpdatePost post={post} open={open} setOpen={setOpen} />
      </Menu>
    );
  }


  export default MenuPost;