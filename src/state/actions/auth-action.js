import { authActions } from "../slices/auth-slice";
import * as authAPI from "../apis/auth/auth";
import { success, error } from "../../utils/toast";

export const signup = (formData, navigate) => async(dispatch) =>{
    try{
        dispatch(authActions.startSignup());
        const { data } = await authAPI.signup(formData);
        dispatch(authActions.signup(data));
        dispatch(authActions.endSignup());
        navigate("/")
        success(data);

    }catch(err) { error(err); dispatch(authActions.endSignup()) }
}

export const signin = (formData, navigate) => async(dispatch) =>{
    try{
        dispatch(authActions.startSignin());
        const { data } = await authAPI.signin(formData);
        dispatch(authActions.signin(data));
        dispatch(authActions.endSignin());
        navigate("/")
        success(data);

    }catch(err) { error(err); dispatch(authActions.endSignin()) }
}

export const logout = (navigate) => async(dispatch) =>{
    try{
        dispatch(authActions.startLogout());
        dispatch(authActions.logout());
        dispatch(authActions.endLogout());
        navigate("/auth");

    }catch(err) { error(err); dispatch(authActions.endLogout()) }
}

export const forgotPassword = (formData, setPath, setKey) => async(dispatch) =>{
    try{
        dispatch(authActions.startForgotPass());
        const { data } = await authAPI.forgotPassword(formData);
        dispatch(authActions.endForgotPass());
        setPath("verifyCode");
        setKey(k=>!k);
        success(data);

    }catch(err) { error(err); dispatch(authActions.endForgotPass()) }
}

export const verifyResetCode = (formData, setPath, setKey) => async(dispatch) =>{
    try{
        dispatch(authActions.startVerifyCode());
        const { data } = await authAPI.verifyResetCode(formData);
        dispatch(authActions.endVerifyCode());
        setPath("resetPassword");
        setKey(k=>!k);
        success(data);

    }catch(err) { error(err); dispatch(authActions.endVerifyCode()) }
}

export const resetPassword = (formData, setPath, setKey) => async(dispatch) =>{
    try{
        dispatch(authActions.startResetPass());
        const { data } = await authAPI.resetPassword(formData);
        dispatch(authActions.endResetPass());
        setPath("signin");
        setKey(k=>!k);
        success(data);

    }catch(err) { error(err); dispatch(authActions.endResetPass()) }
}
