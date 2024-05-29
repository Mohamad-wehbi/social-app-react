import UserInfoSkeleton from "../../global/user-info-skeleton";

const AdminPostSkeleton = () => {

    return(
       
        <div className="flex flex-col justify-between bg-primary border-4 rounded-lg px-3 py-4 h-[342.87px]">
            <UserInfoSkeleton>
                <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div>
            </UserInfoSkeleton>
            <div className="bg-gray-200 rounded-full w-60 h-3 animate-pulse relative top-2"></div>
            <div className="bg-gray-200 rounded-lg w-full h-[176.47px] animate-pulse"></div>
            <div className="bg-gray-200 rounded-full w-28 h-3 animate-pulse relative bottom-2"></div>
        </div>
      
    )
}

export default AdminPostSkeleton;