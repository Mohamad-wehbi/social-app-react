import * as postAPI from "../apis/post/user";
import { success, error } from "../../utils/toast";
import { postActions } from "../slices/post-slice";

// User actions

export const getFollowingPosts = () => async(dispatch) =>{
    try{
        dispatch(postActions.startLoadingFollowingPosts());
        const { data } = await postAPI.getFollowingPosts();
        dispatch(postActions.setFollowingPosts(data));
        dispatch(postActions.endLoadingFollowingPosts());

    }catch(err) { error(err); dispatch(postActions.endLoadingFollowingPosts()) }
}

export const createPost = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(postActions.startCreating());
        const { data } = await postAPI.createPost(formData);
        dispatch(postActions.createPost(data));
        dispatch(postActions.endCreating());
        success(data);
        setOpen(v=>!v);

    }catch(err) { error(err); dispatch(postActions.endCreating()) }
}

export const updatePost = (postId, formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(postActions.startUpdating());
        const { data } = await postAPI.updatePost(postId, formData);
        dispatch(postActions.updatePost(data));
        dispatch(postActions.endUpdating());
        success(data);
        setOpen(false);

    }catch(err) { error(err); dispatch(postActions.endUpdating()) }
}

export const deleteMyPost = (postId) => async(dispatch) =>{
    try{
        const { data } = await postAPI.deleteMyPost(postId);
        dispatch(postActions.deletePost(postId));
        success(data);

    }catch(err) { error(err) }
}

export const likePost = (postId) => async(dispatch) =>{
    try{
        dispatch(postActions.startLoadingLikesPost());
        const { data } = await postAPI.likePost(postId);
        dispatch(postActions.setLike(data));
        dispatch(postActions.endLoadingLikesPost());

    }catch(err) { error(err); dispatch(postActions.endLoadingLikesPost()) }
}

// Admin actions

export const getPosts = (query) => async(dispatch) =>{
    try{
        dispatch(postActions.startLoadingPosts());
        const { data } = await postAPI.getPosts(query);
        dispatch(postActions.setPosts(data));
        dispatch(postActions.setPagination(data));
        dispatch(postActions.endLoadingPosts());

    }catch(err) { error(err); dispatch(postActions.endLoadingPosts()) }
}

export const deletePost = (postId) => async(dispatch) =>{
    try{
        const { data } = await postAPI.deletePost(postId);
        dispatch(postActions.deletePostAdmin(postId));
        success(data);

    }catch(err) { error(err) }
}

export const getPostsCount = () => async(dispatch) =>{
    try{
        
        const { data } = await postAPI.postsCount();
        dispatch(postActions.setPostsCount(data));
        
    }catch(err) { error(err) }
}