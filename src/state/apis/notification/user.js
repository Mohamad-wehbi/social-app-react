import axios from 'axios'
import baseURL from "../../../utils/base-url";
const req = axios.create(baseURL);

req.interceptors.request.use((req) => {
    if (localStorage.getItem('userInfo'))
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
    return req;
  });
  
export const getNotifications = () => req.get("/notifications");
export const deleteNotification = (id) => req.delete(`/notifications/${id}`);
export const deleteAllNotifications = () => req.delete("/notifications");
