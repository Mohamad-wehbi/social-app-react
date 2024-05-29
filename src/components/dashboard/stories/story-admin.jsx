import UserInfo from "../../global/user-info";
import DeleteStoryAdmin from "./delete-story";

const StoryAdmin = ({story}) => {

    return(
        
        <div className="relative border-2 border-gray-800 rounded-2xl">
            <img src={story.image} alt="image" className="h-full w-full object-cover rounded-2xl"/>
            <div className="absolute left-0 top-0 w-full">
                <div className="m-3">
                    <UserInfo image={story.user.profilePicUrl} username={story.user.username} userId={story.userId} desc={story.createdAt}>
                        <DeleteStoryAdmin storyId={story.id}/>
                    </UserInfo>
                </div>
            </div>
            <p className="font-extrabold absolute left-0 bottom-0 w-full m-2 text-primaryColor">{story.desc}</p> 
        </div>
      
    )
}

export default StoryAdmin;