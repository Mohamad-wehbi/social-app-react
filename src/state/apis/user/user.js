import axios from 'axios'
import baseURL from "../../../utils/base-url";

const req = axios.create(baseURL);

req.interceptors.request.use((req) => {
    if (localStorage.getItem('userInfo'))
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
    return req;
  });

const reqImg = axios.create(baseURL);

reqImg.interceptors.request.use((req) => {
    if (localStorage.getItem('userInfo')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
      req.headers["Content-Type"] = "multipart/form-data";
    }
    return req;
  });

// User routes

export const getUsers = (query="") => req.get(`/users?${query}`);
export const getUser = (id) => req.get(`/users/${id}`);
export const followUser = (id) => req.get(`/users/follow/${id}`);
export const getFollowingUser = (id) => req.get(`/users/following/${id}`);
export const getFollowersUser = (id) => req.get(`/users/followers/${id}`);

export const updateMe = (data) => req.patch("/users/update-me", data);
export const updateEmail = (data) => req.patch("/users/update-email", data);
export const updateUsername = (data) => req.patch("/users/update-username", data);
export const updateMyPassword = (data) => req.patch("/users/update-password", data);
export const deleteMe = () => req.delete("/users/delete-me");

export const deleteProfileImg = () => req.delete("/users/delete-profile-img");
export const deleteCoverImg = () => req.delete("/users/delete-cover-img");
export const updateProfileImg = (data) => reqImg.patch("/users/change-profile-img", data);
export const updateCoverImg = (data) => reqImg.patch("/users/change-cover-img", data);

// Admin routes

export const usersCount = () => req.get("/users/count");
export const deleteUser = (id) => req.delete(`users/${id}`);
