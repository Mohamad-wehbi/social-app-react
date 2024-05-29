import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../../state/actions/post-action";
import { useEffect } from "react";
import { IconButton } from "@material-tailwind/react";


const AddLike = ({post}) =>{

    const dispatch = useDispatch()
    const addLikeHandler = () => dispatch(likePost(post.id));
    const {user} = useSelector(state => state.auth)
    
    const isFollowing = () => post.likes?.some((like) => like.userId == user.id);
    useEffect(()=> {isFollowing()}, [post.likes.length])


    return(

        <IconButton onClick={addLikeHandler} variant="text" className="text-primaryColor text-3xl">
            {!isFollowing() ? <AiOutlineHeart /> : <AiFillHeart className="text-main" />}
        </IconButton>
    )
}

export default AddLike;