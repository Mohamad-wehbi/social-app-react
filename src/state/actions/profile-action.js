import { profileActions } from "../slices/profile-slice";
import * as userAPI from "../apis/user/user";
import { success, error } from "../../utils/toast";
import { authActions } from "../slices/auth-slice";
import { postActions } from "../slices/post-slice";

// User actions

export const getUsers = (query) => async(dispatch) =>{
    try{
        dispatch(profileActions.startLoadingUsers());
        const { data } = await userAPI.getUsers(query);
        dispatch(profileActions.setProfiles(data));
        dispatch(profileActions.setPagination(data));
        dispatch(profileActions.endLoadingUsers());

    }catch(err) { error(err); dispatch(profileActions.endLoadingUsers()) }
}

export const getRandomUsers = () => async(dispatch) =>{
    try{
        dispatch(profileActions.startLoadingRandomUsers());
        const { data } = await userAPI.getUsers();
        dispatch(profileActions.setRandomUsers(data));
        dispatch(profileActions.endLoadingRandomUsers());

    }catch(err) { error(err); dispatch(profileActions.endLoadingRandomUsers()) }
}

export const getUser = (userId) => async(dispatch) =>{
    try{
        //dispatch(postActions.startLoadingProfile());
        const { data } = await userAPI.getUser(userId);
        dispatch(profileActions.setProfile(data));
        dispatch(postActions.setUserPosts(data));
        dispatch(postActions.setUserPostsCount(data));
        //dispatch(postActions.endLoadingProfile());

    }catch(err) { error(err); /*dispatch(postActions.endLoadingProfile())*/ }
}

export const getDefaultUser = (userId) => async(dispatch) =>{
    try{
        //dispatch(profileActions.startLoadingDefaultProfile());
        const { data } = await userAPI.getUser(userId);
        dispatch(profileActions.setProfile(data));
        //dispatch(profileActions.endLoadingDefaultProfile());

    }catch(err) { error(err); /*dispatch(profileActions.endLoadingDefaultProfile())*/ }
}

export const deleteMe = (navigate) => async(dispatch) =>{
    try{
        const { data } = await userAPI.deleteMe();
        dispatch(authActions.logout());
        navigate("/signup")
        success(data);

    }catch(err) { error(err) }
}

export const followUser = (userId, like) => async(dispatch) =>{
    try{
        const { data } = await userAPI.followUser(userId);
        dispatch(profileActions.chengeFollowing(data));
        dispatch(profileActions.setIsFollowed(data));
        dispatch(postActions.setIsFollowed({newUser: data.newUser, like}));
        success(data);

    }catch(err) { error(err) }
}

export const getFollowingUser = (userId) => async(dispatch) =>{
    try{
        dispatch(profileActions.startLoadingFollowing());
        const { data } = await userAPI.getFollowingUser(userId);
        dispatch(profileActions.setFollowing(data));
        dispatch(profileActions.endLoadingFollowing());

    }catch(err) { error(err); dispatch(profileActions.endLoadingFollowing()) }
}

export const getFollowersUser = (userId) => async(dispatch) =>{
    try{
        dispatch(profileActions.startLoadingFollowers());
        const { data } = await userAPI.getFollowersUser(userId);
        dispatch(profileActions.setFollowers(data));
        dispatch(profileActions.endLoadingFollowers());

    }catch(err) { error(err); dispatch(profileActions.endLoadingFollowers()) }
}

export const updateMe = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingInfo());
        const { data } = await userAPI.updateMe(formData);
        dispatch(profileActions.updateProfile(data));
        dispatch(profileActions.endUpdatingInfo());
        success(data);
        setOpen(false);

    }catch(err) { error(err); dispatch(profileActions.endUpdatingInfo()) }
}

export const updateUsername = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingUsername());
        const { data } = await userAPI.updateUsername(formData);
        dispatch(profileActions.updateUsername(data));
        dispatch(authActions.updateUsername(data));
        dispatch(profileActions.endUpdatingUsername());
        success(data);
        setOpen(false)

    }catch(err) { error(err); dispatch(profileActions.endUpdatingUsername()) }
}

export const updateEmail = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingEmail());
        const { data } = await userAPI.updateEmail(formData);
        dispatch(profileActions.updateEmail(data));
        dispatch(profileActions.endUpdatingEmail());
        success(data);
        setOpen(false)

    }catch(err) { error(err); dispatch(profileActions.endUpdatingEmail()) }
}

export const updateProfileImg = (formData, clearForms) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingPhoto());
        const { data } = await userAPI.updateProfileImg(formData);
        dispatch(profileActions.updateProfilePhoto(data));
        dispatch(authActions.updateUserPhoto(data));
        dispatch(profileActions.endUpdatingPhoto());
        clearForms()
        success(data);

    }catch(err) { error(err); dispatch(profileActions.endUpdatingPhoto()) }
}

export const updateCoverImg = (formData, clearForms) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingCover());
        const { data } = await userAPI.updateCoverImg(formData);
        dispatch(profileActions.updateProfileCover(data));
        dispatch(profileActions.endUpdatingCover());
        clearForms()
        success(data);

    }catch(err) { error(err); dispatch(profileActions.endUpdatingCover()) }
}

export const deleteProfileImg = () => async(dispatch) =>{
    try{
        const { data } = await userAPI.deleteProfileImg();
        dispatch(profileActions.deleteProfilePhoto(data));
        dispatch(authActions.updateUserPhoto(data));
        success(data);

    }catch(err) { error(err) }
}

export const deleteCoverImg = () => async(dispatch) =>{
    try{
        const { data } = await userAPI.deleteCoverImg();
        dispatch(profileActions.deleteProfileCover(data));
        success(data);

    }catch(err) { error(err) }
}

export const updateMyPassword = (formData, setOpen) => async(dispatch) =>{
    try{
        dispatch(profileActions.startUpdatingPass());
        const { data } = await userAPI.updateMyPassword(formData);
        dispatch(profileActions.endUpdatingPass());
        setOpen(false);
        success(data);

    }catch(err) { error(err); dispatch(profileActions.endUpdatingPass()) }
}

// Admin actions

export const getUsersCount = () => async(dispatch) =>{
    try{
        
        const { data } = await userAPI.usersCount();
        dispatch(profileActions.setProfilesCount(data));
        
    }catch(err) { error(err) }
}

export const deleteUser = (userId) => async(dispatch) =>{
    try{
        const { data } = await userAPI.deleteUser(userId);
        dispatch(profileActions.deleteProfileAdmin(userId));
        success(data);

    }catch(err) { error(err) }
}
