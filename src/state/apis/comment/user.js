import axios from 'axios'
import baseURL from "../../../utils/base-url";
const req = axios.create(baseURL);

req.interceptors.request.use((req) => {
    if (localStorage.getItem('userInfo'))
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
    return req;
  });


// User routes

export const createComment = (data) => req.post("/comments", data);
export const updateComment = (id, data) => req.patch(`/comments/${id}`, data);
export const deleteMyComment = (id) => req.delete(`/comments/delete-comment-user/${id}`);

// Admin routes

export const getComments = (query="") => req.get(`/comments?${query}`);
export const CommentsCount = () => req.get("/comments/count");
export const deleteComment = (id) => req.delete(`/comments/delete-comment-admin/${id}`);
