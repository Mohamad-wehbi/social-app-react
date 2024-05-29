import { Button, Input } from "@material-tailwind/react";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { signin } from "../../../state/actions/auth-action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { validateSignin } from "../../../validation/auth";
import { ErrorParagraph } from "../../global/error-paragraph";
import SocialMedia from "../socialMedia/social-media";

const Signin = ({setKey, setPath}) =>{

    const [showPass, setShowPass] = useState(true);
    const [values, setValues] = useState({email:"", password:""});
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const {signedin} = useSelector(state => state.auth);
    const navicate = useNavigate()

    const handleChange = event => {
        let { name, value } = event.target;
        setValues({ ...values, [name] : value });
    }

    const signinHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateSignin(values);
        setErrors(validationErrors)
        if(err) return;
        dispatch(signin(values, navicate))
    }

    const path = () =>{
        setKey(k=>!k);
        setPath("forgotPassword")
    }

    const hiddenPassword = () =>(
        <div onClick={()=>setShowPass(!showPass)} className="text-xl">
            { showPass? <PiEyeSlashFill/> : <IoEyeSharp/> }
        </div> )

    return(
        <>
            <h1 className="text-4xl font-bold text-primaryColor">Sign In</h1>
            <SocialMedia/>
            <p className="text-secondryColor font-bold text-md">Use your email and password</p>
            <form className="w-full flex flex-col justify-center items-center gap-6" onSubmit={signinHandler}>
                <div className="w-full">
                    <Input type="text" name="email" placeholder="Email Address"  onChange={handleChange} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg primaryColor/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.email}/>
                </div>
                <div className="w-full">
                    <Input type={showPass ?"password":"text"} name="password" placeholder="Password"  onChange={handleChange}
                        icon={hiddenPassword()} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.password}/>
                </div>
                <p onClick={path} className="text-secondryColor font-bold text-md cursor-pointer">Forget Your Password?</p>
                <Button loading={signedin} type="submit" className="px-10 py-2 bg-main text-primaryColor text-lg">SIGN IN</Button>
            </form>
            
        </>
    )
}

export default Signin;