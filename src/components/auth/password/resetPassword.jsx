import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../state/actions/auth-action";
import { Input, Button } from "@material-tailwind/react";
import { validateResetPassword } from "../../../validation/auth";
import { ErrorParagraph } from "../../global/error-paragraph";
import SocialMedia from "../socialMedia/social-media";

const ResetPassword = ({setKey, setPath}) =>{

    const [showNewPass, setShowNewPass] = useState(true);
    const [showConfirmNewPass, setshowConfirmNewPass] = useState(true);
    const [values, setValues] = useState({email:"", newPassword:"", confirmNewPassword:""});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const {resetedPass} = useSelector(state => state.auth);

    const resetPasswordHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateResetPassword(values);
        setErrors(validationErrors)
        if(err) return;
        dispatch(resetPassword(values, setPath, setKey));  
    }

    const handleChange = event => {
        let { name, value } = event.target;
        setValues({ ...values, [name] : value });
    }

    const hiddenNewPassword = () =>(
        <div onClick={()=>setShowNewPass(v=>!v)} className="text-xl">
            { showNewPass? <PiEyeSlashFill/> : <IoEyeSharp/> }
        </div> )

    const hiddenConfirmNewPassword = () =>(
        <div onClick={()=>setshowConfirmNewPass(v=>!v)} className="text-xl">
            { showConfirmNewPass? <PiEyeSlashFill/> : <IoEyeSharp/> }
        </div> )


    return(
        <>
        <h1 className="text-4xl font-bold text-primaryColor">Reset Password</h1>
        <SocialMedia/>
        <p className="text-secondryColor font-bold text-md">write the code here please to Verify your email</p>

        <form className="w-full flex flex-col justify-center items-center gap-6" onSubmit={resetPasswordHandler}>
                <div className="w-full">
                    <Input type="email" name="email" placeholder="Email Address"  onChange={handleChange} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.email}/>
                </div>
                <div className="w-full">
                    <Input type={showNewPass ?"password":"text"} name="newPassword" placeholder="New Password"  onChange={handleChange}
                        icon={hiddenNewPassword()} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.newPassword}/>
                </div>
                <div className="w-full">
                    <Input type={showConfirmNewPass ?"password":"text"} name="confirmNewPassword" placeholder="Comfirm New Password"  onChange={handleChange}
                        icon={hiddenConfirmNewPassword()} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.confirmNewPassword}/>
                </div>
            <p className="text-secondryColor font-bold text-md cursor-pointer">Reset Your Password?</p>
            <Button loading={resetedPass} type="submit" className="px-10 py-2 bg-main text-primaryColor text-lg">RESET</Button>
        </form>
    </>
    )
}

export default ResetPassword;