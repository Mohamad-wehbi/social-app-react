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
        console.log(`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`)
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
      req.headers["Content-Type"] = "multipart/form-data";
    }
    return req;
  });

// User routes

export const createPost = (data) => reqImg.post("/posts", data);
export const getFollowingPosts = () => req.get("/posts/user-posts");
export const deleteMyPost = (id) => req.delete(`/posts/delete-user-post/${id}`);
export const updatePost = (id, data) => reqImg.patch(`/posts/update-post/${id}`, data);
export const likePost = (id) => req.get(`/posts/post-like/${id}`);

// Admin routes

export const getPosts = (query="") => req.get(`/posts?${query}`);
export const postsCount = () => req.get("/posts/count");
export const deletePost = (id) => req.delete(`/posts/${id}`);
