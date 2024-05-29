
const StoryCover = ({story, setOpen}) => {

    const firstName = story[0].user.username.split(" ")[0];
    return(
        <>
            <div className="flex flex-col items-center gap-2">
                <div onClick={()=> setOpen(true)}  className="rounded-full border-4 border-main w-16 h-16 p-1 transition-opacity hover:opacity-50">
                    <img className="w-full h-full object-cover rounded-full" src={story[0].user.profilePicUrl} alt="photo" />
                </div>
                <h3 className="text-primaryColor font-bold">{firstName}</h3> 
            </div>
        </>
        
        
    )
}

export default StoryCover;