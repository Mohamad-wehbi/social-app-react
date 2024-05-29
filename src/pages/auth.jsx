import { useEffect, useState } from "react";
import AuthCon from "../components/auth/authCon";
import Signin from "../components/auth/signin/signin";
import NavBanelCon from "../components/auth/navBanel/navBanelCon";
import NavBanel from "../components/auth/navBanel/navBanel";
import Signup from "../components/auth/signup/signup";
import ForgotPassword from "../components/auth/password/forgotPassword";
import VerifyCode from "../components/auth/password/verifyCode";
import ResetPassword from "../components/auth/password/resetPassword";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Auth = () => {

    const {user} = useSelector(state=> state.auth);
    const navicate = useNavigate()
    useEffect(() => { user && navicate("/") }, []);

    const [key, setKey] = useState(false);
    const [path, setPath] = useState("signup");

    const signup = {header:"Hello, Friend", desc:"Register with your personal details to use all of site features", button: "SIGN IN", path: "signin"};
    const signin = {header: "Welcome Back", desc:"Please Enter your personal details to use all of site features", button: "SIGN UP", path: "signup"};
    const forgotPassword = {header: "Enter Your Email", desc:"Please Enter your email and then verify than you have received the verification code", button: "GO BACK", path: "signin"};
    const verifyCode = {header: "Check Your Email", desc:"Please Enter the code we sent to the email to continue", button: "GO BACK", path: "forgotPassword"};
    const resetPassword = {header: "Enter New Password", desc:"Please provide your email and new password to continue", button: "GO BACK", path: "verifyCode"};

    return(
            <div className="bg-secondry">
                <div className="container">
                    <div className="w-full 2xl:w-[75%] h-screen m-auto py-5 flex justify-center items-center">
                        <div  className="flex w-full lg:flex-row flex-col justify-between h-full lg:h-[70%] rounded-xl bg-primary">

                            <AuthCon keys={key}>
                                {
                                    path == "signup" ?         <Signup/>
                                    :path == "signin"?         <Signin setKey={setKey} setPath={setPath}/>
                                    :path == "forgotPassword"? <ForgotPassword setKey={setKey} setPath={setPath}/>
                                    :path == "verifyCode"?     <VerifyCode setKey={setKey} setPath={setPath}/>
                                    :path == "resetPassword"?  <ResetPassword setKey={setKey} setPath={setPath}/>:null    
                                }                    
                            </AuthCon>
                  
                            <NavBanelCon keys={key}>
                                {
                                    path == "signup" ?         <NavBanel setKey={setKey} setPath={setPath} data={signup} />
                                    :path == "signin" ?        <NavBanel setKey={setKey} setPath={setPath} data={signin} />
                                    :path == "forgotPassword"? <NavBanel setKey={setKey} setPath={setPath} data={forgotPassword} />
                                    :path == "verifyCode" ?    <NavBanel setKey={setKey} setPath={setPath} data={verifyCode} />
                                    :path == "resetPassword" ? <NavBanel setKey={setKey} setPath={setPath} data={resetPassword} />:null
                                }
                            </NavBanelCon>
                            
                        </div>
                    </div>  
                </div>
            </div>
    )
}

export default Auth;