import UserInfoSkeleton from "../../global/user-info-skeleton";

const AdminCommentSkeleton = () => {

    return(
       
        <div className="flex flex-col justify-between bg-primary border-4 rounded-lg p-4 h-[110.4px]">
            <UserInfoSkeleton>
                <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div>
            </UserInfoSkeleton>
            <div className="bg-gray-200 rounded-full w-80 h-3 animate-pulse"></div>
        </div>
      
    )
}

export default AdminCommentSkeleton;