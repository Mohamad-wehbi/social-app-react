import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Shape from "../global/shape";
import { getCommentsCount } from "../../../state/actions/comment-action";
import { FaRegComments } from "react-icons/fa";

const CommentsCount = () => {

      const dispatch = useDispatch();
      useEffect(()=>{dispatch(getCommentsCount())})
      const {commentsCount} = useSelector(state=> state.comment)

    return(
                        
      <Shape count={commentsCount} desc={"Comments"} >
            <FaRegComments/>
      </Shape>
                
    )
}

export default CommentsCount;