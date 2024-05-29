
const StorySkeletonCover = () => {

    return(
        
        <>
            <div className="flex flex-col items-center h-[96px] justify-between pb-2">
                <div className="rounded-full border-4 border-gray-200 bg-gray-200 w-16 h-16 p-1 animate-pulse"></div>
                <div className="bg-gray-200 rounded-full w-16 h-2 animate-pulse"></div>
            </div>
        </>
    )
}

export default StorySkeletonCover;