import UserInfoSkeleton from "../../global/user-info-skeleton"

const AdminUserSkeleton = () => {

    return(
        
        <div className="flex items-center rounded-lg border-2 w-full px-4 h-[62.13px]">
            <div className="w-2/6"><UserInfoSkeleton/></div>
            <div className="w-1/6"><div className="bg-gray-200 rounded-full w-24 h-3 animate-pulse "></div></div>
            <div className="w-1/6"><div className="bg-gray-200 rounded-full w-24 h-3 animate-pulse "></div></div>
            <div className="w-1/6 pl-3"><div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div></div>
            <div className="w-1/6 pl-3"><div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div></div>
        </div>
    )
}

export default AdminUserSkeleton