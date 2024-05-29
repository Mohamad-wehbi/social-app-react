import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth-slice";
import { postReducer } from "../slices/post-slice";
import { commentReducer } from "../slices/comment-slice";
import { storyReducer } from "../slices/story-slice";
import { profileReducer } from "../slices/profile-slice";
import { notificationReducer } from "../slices/notification-slice";
import { themeReducer } from "../slices/theme-slice";


const store = configureStore({
    reducer: {
       auth: authReducer,
       profile: profileReducer,
       post: postReducer,
       comment: commentReducer,
       story: storyReducer,
       notification: notificationReducer,
       theme: themeReducer,
    }
});

export default store;