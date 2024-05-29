import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Shape from "../global/shape";
import { getPostsCount } from "../../../state/actions/post-action";
import { BsFileEarmarkPostFill } from "react-icons/bs";

const PostsCount = () => {

      const dispatch = useDispatch();
      useEffect(()=>{dispatch(getPostsCount())})
      const {postsCount} = useSelector(state=> state.post)

    return(
                        
      <Shape count={postsCount} desc={"Posts"} >
            <BsFileEarmarkPostFill/>
      </Shape>
                
    )
}

export default PostsCount;