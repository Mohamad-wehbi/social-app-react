
const ProfileSkeleton = () => {

    return(
        <div className="card">
            <div className="mx-[-15px] h-[436.4px]">
            <div className="flex flex-col items-center justify-between h-full">
                <div className="w-full">
                    <div className="bg-gray-200 w-full h-52 relative rounded-xl animate-pulse">
                        <div className="bg-primary rounded-full absolute top-4 right-4 w-6 h-6"></div>
                        <div className="bg-primary rounded-full absolute top-4 right-14 w-6 h-6"></div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="rounded-full border-[4px] border-primary bg-gray-200 translate-y-[-50%] mb-[-60px] relative">
                            <div className="w-32 h-32 rounded-full m-[3px]"></div>
                            <div className="bg-primary rounded-full w-8 h-8 absolute bottom-1 right-1 z-50 border-2"></div>
                        </div>
                        <div className="bg-gray-200 rounded-full w-52 h-3 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-full w-96 h-3 animate-pulse"></div> 
                    </div>
                </div>
                <div className="flex justify-between w-1/2 items-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-gray-200 rounded-full w-8 h-6 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-full w-28 h-3 animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-gray-200 rounded-full w-8 h-6 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-full w-28 h-3 animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-gray-200 rounded-full w-8 h-6 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-full w-28 h-3 animate-pulse"></div>
                    </div>
                </div>
            </div> 
            </div>
           
        </div>
    )
}

export default ProfileSkeleton;