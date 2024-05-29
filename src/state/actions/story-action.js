import * as storyAPI from "../apis/story/user";
import { success, error } from "../../utils/toast";
import { storyActions } from "../slices/story-slice";

// User actions

export const createStory = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(storyActions.startCreating());
        const { data } = await storyAPI.createStory(formData);
        dispatch(storyActions.createStory(data));
        dispatch(storyActions.endCreating());
        success(data);
        setOpen(false);

    }catch(err) { error(err); dispatch(storyActions.endCreating()) }
}

export const getFollowingStories = () => async(dispatch) =>{
    try{
        dispatch(storyActions.startLoadingFollowingStories());
        const { data } = await storyAPI.getFollowingStories();
        dispatch(storyActions.setFollowingStories(data));
        dispatch(storyActions.endLoadingFollowingStories());

    }catch(err) { error(err); dispatch(storyActions.endLoadingFollowingStories()) }
}

export const deleteMyStory = (storyId) => async(dispatch) =>{
    try{
        const { data } = await storyAPI.deleteMyStory(storyId);
        dispatch(storyActions.deleteStory(storyId));
        success(data);

    }catch(err) { error(err) }
}

// Admin actions

export const getStories = (query) => async(dispatch) =>{
    try{
        dispatch(storyActions.startLoadingStories());
        const { data } = await storyAPI.getStories(query);
        dispatch(storyActions.setStories(data));
        dispatch(storyActions.setPagination(data));
        dispatch(storyActions.endLoadingStories());

    }catch(err) { error(err); dispatch(storyActions.endLoadingStories()) }
}

export const deleteStory = (storyId) => async(dispatch) =>{
    try{
        const { data } = await storyAPI.deleteStory(storyId);
        dispatch(storyActions.deleteStoryAdmin(storyId));
        success(data);

    }catch(err) { error(err) }
}

export const getStoriesCount = () => async(dispatch) =>{
    try{
        
        const { data } = await storyAPI.storiesCount();
        dispatch(storyActions.setStoriesCount(data));

    }catch(err) { error(err) }
}