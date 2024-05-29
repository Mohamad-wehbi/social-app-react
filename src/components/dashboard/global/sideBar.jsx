import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PieChart from "./PieChart";
import { useSelector } from "react-redux"
import { MdAccountBalance, MdDashboard, MdOutlineWebStories, MdSupervisorAccount } from "react-icons/md";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

const SideBar = ({active, setActive}) => {

    const {user} = useSelector(state=> state.auth);
    
    return(
        
        <div className="h-full flex flex-col justify-between text-primaryColor rounded-2xl pr-6">
             <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Link to="/">
                        <div className="rounded-full mt-[-5px] border-2 border-main w-16 h-16 p-1">
                            <img className="w-full h-full object-cover rounded-full" src={user.profilePicUrl} alt="photo" />
                        </div>
                    </Link>
                    <div className="leading-5">
                        <h2 className="font-bold text-primaryColor text-xl">{user.username}</h2>
                        <p className="font-semibold text-secondryColor text-sm">Go Home</p>
                    </div>
                </div>
                <div className="text-primaryColor text-2xl">
                     <IoMdArrowRoundBack />
                </div>
            </div>
            <div className="flex justify-between flex-col gap-10 bg-main py-12 pl-4 rounded-2xl">
                <div className="flex justify-between items-center pr-6">
                    <h2 className="font-bold text-2xl text-primaryColor mb-2 border-b-4 border-primary">Dashboard :</h2>
                    <MdDashboard  className="text-2xl text-primaryColor cursor-pointer mt-[-20px]"/>
                </div>
                <ul className="flex flex-col gap-3 text-primaryColor font-bold text-xl">
                    <Link to="" onClick={()=>setActive("informations")} className={`${active== "informations"? "arrow-nav": null} p-5 flex gap-4`}><MdAccountBalance />Statistics</Link>
                    <Link to="users" onClick={()=>setActive("users")} className={`${active=="users"? "arrow-nav": null}  p-5 flex gap-4`}><MdSupervisorAccount />Users</Link>
                    <Link to="posts" onClick={()=>setActive("posts")} className={`${active=="posts"? "arrow-nav": null} p-5 flex gap-4`}><BsFileEarmarkPostFill/>Posts</Link>
                    <Link to="stories" onClick={()=>setActive("stories")} className={`${active=="stories"? "arrow-nav": null} p-5 flex gap-4`}><MdOutlineWebStories/>Stories</Link>
                    <Link to="comments" onClick={()=>setActive("comments")} className={`${active=="comments"? "arrow-nav": null} p-5 flex gap-4 `}><FaRegComments/>Comments</Link>
                </ul>
            </div>
        <PieChart/>
    </div>
    )
}

export default SideBar;