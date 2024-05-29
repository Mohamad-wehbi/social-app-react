
const ProfileSkeletonInfo = () => {
    

    return(
        <div className="w-full h-[330.13px] flex flex-col justify-around"> 
            <div className="pb-5 border-b-2 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-2">
                    <div className="bg-gray-200 rounded-full w-44 h-4 animate-pulse"></div>
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                    <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                    <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                    <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                </div> 
            </div>
            <div className="pb-5 border-b-2">
                <div className="flex justify-between items-center mb-4">
                    <div className="bg-gray-200 rounded-full w-44 h-4 animate-pulse"></div>
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                    <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                </div> 
            </div>
            

            <div className="">
                <div className="flex justify-between items-center mb-4">
                    <div className="bg-gray-200 rounded-full w-44 h-4 animate-pulse"></div>
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                    <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                </div> 
            </div>
        </div>
    )
}

export default ProfileSkeletonInfo;