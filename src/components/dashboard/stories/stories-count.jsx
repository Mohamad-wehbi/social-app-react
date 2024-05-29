import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStoriesCount } from "../../../state/actions/story-action";
import Shape from "../global/shape";
import { MdOutlineWebStories } from "react-icons/md";

const StoriesCount = () => {

      const dispatch = useDispatch();
      useEffect(()=>{dispatch(getStoriesCount())})
      const {storiesCount} = useSelector(state=> state.story)

    return(
                        
      <Shape count={storiesCount} desc={"Stories"} >
            <MdOutlineWebStories/>
      </Shape>
                
    )
}

export default StoriesCount;