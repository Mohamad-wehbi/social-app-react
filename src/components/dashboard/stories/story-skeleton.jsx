import UserInfoSkeleton from "../../global/user-info-skeleton";

const AdminStorySkeleton = () => {

    return(
        
        <div className="flex flex-col justify-between bg-primary relative p-3 rounded-2xl h-[196.75px] border-4">
            <UserInfoSkeleton>
                <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div>
            </UserInfoSkeleton>
            <div className="bg-gray-200 rounded-full w-60 h-3 animate-pulse"></div>
        </div>
    )
}

export default AdminStorySkeleton;