import UserSkeletonInfo from "../../global/user-info-skeleton";


const PostSkeleton = () => {


    return(
        <div className="card w-full h-[792.9px]">
            <div className="mx-[-15px] flex flex-col justify-between h-full">

                <UserSkeletonInfo>
                    <div className="bg-gray-200 rounded-full w-6 h-6 animate-pulse "></div>
                </UserSkeletonInfo>

                <div className="bg-gray-200 rounded-full w-80 h-3 animate-pulse relative top-2"></div>
                <div className="bg-gray-200 rounded-lg w-full h-[580.9px] animate-pulse"></div>
                <div className="bg-gray-200 rounded-full w-28 h-3 animate-pulse relative bottom-2"></div>

                <div className="flex gap-2 items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 animate-pulse"></div>
                    <div className="bg-gray-200 rounded-full w-8 h-8 animate-pulse"></div>
                    <div className="bg-gray-200 rounded-full w-8 h-8 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default PostSkeleton;