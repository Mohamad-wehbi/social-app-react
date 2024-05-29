import { Link } from "react-router-dom";
import { MdAccountBalance, MdOutlineWebStories, MdSupervisorAccount } from "react-icons/md";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

const MobileNav = ({active, setActive}) => {
    
    return(

        <div className="rounded-2xl w-full bg-main px-3 pb-1 lg:hidden">
            <ul className="w-full flex justify-around gap-1 text-primaryColor text-3xl">
                <Link to="" onClick={()=>setActive("informations")} className={`${active== "informations"? "mobile-nav": null} p-4`}>
                    <MdAccountBalance className={`${active== "informations"? "rotate-90": null}`} />
                </Link>
                <Link to="users" onClick={()=>setActive("users")} className={`${active=="users"? "mobile-nav": null}  p-4`}>
                    <MdSupervisorAccount className={`${active== "users"? "rotate-90": null}`} />
                </Link>
                <Link to="posts" onClick={()=>setActive("posts")} className={`${active=="posts"? "mobile-nav": null} p-4`}>
                    <BsFileEarmarkPostFill className={`${active== "posts"? "rotate-90": null}`}/>
                </Link>
                <Link to="stories" onClick={()=>setActive("stories")} className={`${active=="stories"? "mobile-nav": null} p-4`}>
                    <MdOutlineWebStories className={`${active== "stories"? "rotate-90": null}`}/>
                </Link>
                <Link to="comments" onClick={()=>setActive("comments")} className={`${active=="comments"? "mobile-nav": null} p-4 `}>
                    <FaRegComments className={`${active== "comments"? "rotate-90": null}`}/>
                </Link>
            </ul>
        </div>
        
    )
}

export default MobileNav;