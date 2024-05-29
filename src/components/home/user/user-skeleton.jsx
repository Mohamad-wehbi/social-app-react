import UserInfoSkeleton from "../../global/user-info-skeleton";

const UserSkeleton = () => {

    return(
            <div className="card w-full h-[68px]">
                <UserInfoSkeleton>
                    <div className="bg-gray-200 rounded-lg w-28 h-8 animate-pulse"></div>
                </UserInfoSkeleton>
            </div>
    )
}

export default UserSkeleton;