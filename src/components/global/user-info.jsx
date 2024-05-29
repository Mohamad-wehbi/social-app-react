import { Link } from "react-router-dom";
import Moment from "react-moment";


const UserInfo = ({image, username, userId, desc, children}) => {
    
    const getDesc = () => !desc.includes("@") ? <Moment fromNow date={desc}/> : desc 

    return(
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link to={`/profile/${userId}`}>
                        <div className="rounded-full mt-[-5px] border-[3px] border-main w-10 h-10 p-[2px]">
                            <img className="w-full h-full object-cover rounded-full " src={image} alt="photo" />
                        </div>
                    </Link>
                    <div className="leading-4 text-primaryColor">
                        <h2 className="font-bold text-md">{username}</h2>
                        <p className="font-semibold text-secondryColor text-sm">{getDesc()}</p>
                    </div>
                </div>
                {children}
            </div>
    )
}

export default UserInfo;