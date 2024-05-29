import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./pages/home";
import MainContent from "./components/home/main/mainContent";
import Profile from "./components/home/profile/profile";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import StatisticsAdmin from "./components/dashboard/statistics/statistics-admin";
import UsersAdmin from "./components/dashboard/users/users-admin";
import PostsAdmin from "./components/dashboard/posts/posts-admin";
import StoriesAdmin from "./components/dashboard/stories/stories-admin";
import CommentsAdmin from "./components/dashboard/comments/comments-admin";
import Notifications from "./components/home/notification/notifications";
import Users from "./components/home/user/users";

export const router = createBrowserRouter(createRoutesFromElements([
    <>
        <Route path="/" element={<Home/>}>
            <Route index element={<MainContent/>}/>
            <Route path="profile/:userId" element={<Profile/>}/>
            <Route path="notification" element={<Notifications/>}/>
            <Route path="users" element={<Users/>}/>
        </Route>
        <Route path="/admin" element={<Dashboard/>}>
            <Route index element={<StatisticsAdmin/>}/>
            <Route path="users" element={<UsersAdmin/>}/>
            <Route path="posts" element={<PostsAdmin/>}/>
            <Route path="stories" element={<StoriesAdmin/>}/>
            <Route path="comments" element={<CommentsAdmin/>}/>
        </Route>
        <Route path="/auth" element={<Auth/>}/>
    </>

    
    
    
]))