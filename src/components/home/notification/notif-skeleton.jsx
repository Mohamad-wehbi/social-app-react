import UserSkeletonInfo from "../../global/user-info-skeleton";

const NotificationSkeleton = () => {

    return(

        <div className="card w-full h-[96px] flex flex-col justify-between">
            <UserSkeletonInfo>
                <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse"></div>
            </UserSkeletonInfo>
            <div className="bg-gray-200 rounded-full w-80 h-3 animate-pulse"></div>
        </div>
        
    )
}

export default NotificationSkeleton;