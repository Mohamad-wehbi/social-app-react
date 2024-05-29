import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../state/actions/auth-action"
import { useNavigate } from "react-router";
import { Button, Input } from "@material-tailwind/react";
import { validateSignup } from "../../../validation/auth";
import { ErrorParagraph } from "../../global/error-paragraph";
import SocialMedia from "../socialMedia/social-media";

const Signup = () =>{

    const [showPass, setShowPass] = useState(true);
    const [values, setValues] = useState({username:"", email:"", password:""});
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const {signedup} = useSelector(state => state.auth);
    const navicate = useNavigate()

    const handleChange = event => {
        let { name, value } = event.target;
        setValues({ ...values, [name] : value });
    }

    const signupHandler = (event) =>{
        event.preventDefault();
        const {validationErrors, err} = validateSignup(values);
        setErrors(validationErrors)
        if(err) return;
        dispatch(signup(values, navicate))
    }

    const hiddenPassword = () =>(
        <div onClick={()=>setShowPass(!showPass)} className="text-xl">
            { showPass? <PiEyeSlashFill/> : <IoEyeSharp/> }
        </div> )

    return(
        <>
            <h1 className="text-4xl font-bold text-primaryColor">Sign Up</h1>

            <SocialMedia/>

            <p className="text-secondryColor font-bold text-md">Use your email and password</p>

            <form className="w-full flex flex-col justify-center items-center gap-6" onSubmit={signupHandler}>

                <div className="w-full">
                    <Input type="text" name="username" placeholder="Username" onChange={handleChange} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                        <ErrorParagraph err={errors.username}/>
                </div>
                <div className="w-full">
                    <Input type="text" name="email" placeholder="Email Address"  onChange={handleChange} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
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

                <Button loading={signedup} type="submit" className="px-10 py-2 bg-main text-primaryColor text-lg">SIGN UP</Button>
            </form>
        </>
    )
}

export default Signup;