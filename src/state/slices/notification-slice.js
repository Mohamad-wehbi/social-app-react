import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
   name: "notification",
   initialState: {
    notifications: [],
    notificationsCount: 0,
    loadingNotifications: false,
   },
   
   reducers: {
      
      setNotifications(state, action){
         state.notifications = action.payload.notifications;
      },

      deleteNotification(state, action){
        state.notifications = state.notifications.filter((notification)=>notification.id != action.payload);
      },

      deleteAllNotification(state, action){
        state.notifications = [];
      },

      startLoadingNotifications(state){ state.loadingNotifications = true },
      endLoadingNotifications(state){ state.loadingNotifications = false },
   }
});

const notificationReducer = notificationSlice.reducer;
const notificationActions = notificationSlice.actions;

export { notificationActions, notificationReducer }