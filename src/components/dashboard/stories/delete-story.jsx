import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteStory } from "../../../state/actions/story-action";
import { MdDelete } from "react-icons/md";

const DeleteStoryAdmin = ({storyId}) => {

    const dispatch = useDispatch();
    const deleteStoryAdmin = () => dispatch(deleteStory(storyId));

    return(
        
        <div className="transition-opacity hover:opacity-50" onClick={()=> Alert(deleteStoryAdmin, "story")}>
            <MdDelete className="p-1 text-primaryColor bg-main text-2xl rounded-full"/>
        </div>
    )
}

export default DeleteStoryAdmin;