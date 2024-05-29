
const UserInfoSkeleton = ({children}) => {

    return(
            <div className="flex justify-between items-center w-full h-[36px]">
                <div className="flex items-center gap-2">
                        <div className="rounded-full border-[3px] bg-gray-200 border-gray-200 w-10 h-10 p-[2px]"></div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-200 rounded-full w-36 h-3 animate-pulse"></div>
                        <div className="bg-gray-200 rounded-full w-20 h-3 animate-pulse"></div>
                    </div>
                </div>
                {children}
            </div>
    )
}

export default UserInfoSkeleton;