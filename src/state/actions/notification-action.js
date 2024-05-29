import * as notificationAPI from "../apis/notification/user";
import { success, error } from "../../utils/toast";
import { notificationActions } from "../slices/notification-slice";

// User actions

export const getNotifications = () => async(dispatch) =>{
    try{
        dispatch(notificationActions.startLoadingNotifications());
        const { data } = await notificationAPI.getNotifications();
        dispatch(notificationActions.setNotifications(data));
        dispatch(notificationActions.endLoadingNotifications());

    }catch(err) { error(err); dispatch(notificationActions.endLoadingNotifications()) }
}

export const deleteNotification = (notificationId) => async(dispatch) =>{
    try{
        const { data } = await notificationAPI.deleteNotification(notificationId);
        dispatch(notificationActions.deleteNotification(notificationId));
        success(data);

    }catch(err) { error(err) }
}

export const deleteAllNotifications = () => async(dispatch) =>{
    try{
        const { data } = await notificationAPI.deleteAllNotifications();
        dispatch(notificationActions.deleteAllNotification());
        success(data);

    }catch(err) { error(err) }
}