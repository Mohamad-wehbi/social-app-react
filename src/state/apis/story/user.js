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

export const createStory = (data) => reqImg.post("/stories", data);
export const getFollowingStories = () => req.get("/stories/user-stories");
export const deleteMyStory = (id) => req.delete(`/stories/user-story/${id}`);

// Admin routes

export const getStories = (query="") => req.get(`/stories?${query}`);
export const storiesCount = () => req.get("/stories/count");
export const deleteStory = (id) => req.delete(`/stories/${id}`);

