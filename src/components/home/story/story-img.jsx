import DeleteStory from "./delete-story";
import IsAuth from "../../global/isAuth";
import UserInfo from "../../global/user-info";


const singelStoryImg = ({singelStory}) =>{

    return(
        
        <div className="relative min-h-[541.2px] w-full">
            <img src={singelStory.image} alt="image" className="h-full w-full object-cover"/>
            <div className="absolute left-0 top-0 w-full p-4">

                <UserInfo image={singelStory.user.profilePicUrl} username={singelStory.user.username} userId={singelStory.userId} desc={singelStory.createdAt} color="primary">
                    <IsAuth userId={singelStory.userId}>
                        <DeleteStory storyId={singelStory.id}/>
                    </IsAuth>
                </UserInfo>

            </div>
            <p className="font-extrabold text-white absolute left-0 bottom-0 w-full p-4">{singelStory.desc}</p> 
        </div>
    )
}

export default singelStoryImg;