import { forgotPassword } from "../../../state/actions/auth-action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { ErrorParagraph } from "../../global/error-paragraph";
import { validateForgotPassword } from "../../../validation/auth";
import SocialMedia from "../socialMedia/social-media";

const ForgotPassword = ({setKey, setPath}) =>{

    const [email, setEmail] = useState(null);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const {forgotedPass} = useSelector(state => state.auth);

    const forgotPasswordHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateForgotPassword({email});
        setErrors(validationErrors)
        if(err) return;
        dispatch(forgotPassword({email}, setPath, setKey));
    }

    return(
        <>
            <h1 className="text-4xl font-bold text-primaryColor">Forgot Password</h1>
            <SocialMedia/>
            <p className="text-secondryColor font-bold text-md">Use your email to sending the code</p>
            
            <form className="w-full flex flex-col justify-center items-center gap-6" onSubmit={forgotPasswordHandler}>
                <div className="w-full">
                    <Input type="text"placeholder="Email Address"  onChange={(e)=>setEmail(e.target.value)} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.email}/>
                </div>
                <p className="text-secondryColor font-bold text-md">check your email please</p>
                <Button loading={forgotedPass} type="submit" className="px-10 py-2 bg-main text-primaryColor text-lg">NEXT</Button>
            </form>
            
        </>
    )
}

export default ForgotPassword;