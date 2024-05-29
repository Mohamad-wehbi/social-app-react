import * as commentAPI from "../apis/comment/user";
import { success, error } from "../../utils/toast";
import { commentActions } from "../slices/comment-slice";
import { postActions } from "../slices/post-slice";

// User actions

export const createComment = (formData) => async(dispatch) =>{
    try{
        const { data } = await commentAPI.createComment(formData);
        dispatch(postActions.addCommentToPost(data));
        success(data);

    }catch(err) { error(err) }
}

export const updateComment = (commentId, formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(commentActions.startUpdated());
        const { data } = await commentAPI.updateComment(commentId, formData);
        dispatch(postActions.updateCommentPost(data));
        dispatch(commentActions.endUpdated());
        setOpen(false)
        success(data);

    }catch(err) { error(err); dispatch(commentActions.endUpdated()) }
}

export const deleteMyComment = (id, postId) => async(dispatch) =>{
    try{
        const { data } = await commentAPI.deleteMyComment(id);
        dispatch(postActions.deleteCommentFromPost({id, postId}));
        success(data);

    }catch(err) { error(err) }
}

// Admin actions

export const getComments = (query) => async(dispatch) =>{
    try{
        dispatch(commentActions.startLoadingComments());
        const { data } = await commentAPI.getComments(query);
        dispatch(commentActions.setComments(data));
        dispatch(commentActions.setPagination(data));
        dispatch(commentActions.endLoadingComments());

    }catch(err) { error(err); dispatch(commentActions.endLoadingComments()) }
}

export const deleteComment = (commentId) => async(dispatch) =>{
    try{
        const { data } = await commentAPI.deleteComment(commentId);
        dispatch(commentActions.deleteCommentAdmin(commentId));
        success(data);

    }catch(err) { error(err) }
}

export const getCommentsCount = () => async(dispatch) =>{
    try{
        
        const { data } = await commentAPI.CommentsCount();
        dispatch(commentActions.setCommentsCount(data));
        
    }catch(err) { error(err) }
}