import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Alert } from "../../../utils/sweetAlert";
import { deleteMyStory } from "../../../state/actions/story-action";

const DeleteStory = ({storyId}) => {

    const dispatch = useDispatch();
    const deleteStoryHandler = () => dispatch(deleteMyStory(storyId));

    return(
        
        <div className="transition-opacity hover:opacity-50" onClick={()=> Alert(deleteStoryHandler, "story")}>
            <IoClose className="text-main text-2xl"/>
        </div>
    )
}

export default DeleteStory;