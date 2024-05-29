import axios from 'axios'
import baseURL from "../../../utils/base-url";
const req = axios.create(baseURL);

export const signup = (data) => req.post("/auth/signup", data);
export const signin = (data) => req.post("/auth/signin", data);
export const forgotPassword = (data) => req.post("/auth/forgotPassword", data);
export const verifyResetCode = (data) =>req.post("/auth/verifyResetCode", data);
export const resetPassword = (data) => req.post("/auth/resetPassword", data);
