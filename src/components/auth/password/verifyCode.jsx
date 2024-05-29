import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyResetCode } from "../../../state/actions/auth-action";
import { Button, Input } from "@material-tailwind/react";
import { validateVerifyCode } from "../../../validation/auth";
import { ErrorParagraph } from "../../global/error-paragraph";
import SocialMedia from "../socialMedia/social-media";

const VerifyCode = ({setkey, setPath}) =>{

    const [resetCode, setResetCode] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const {verifyedCode} = useSelector(state => state.auth);

    const verifyCodeHandler = (e) =>{
        e.preventDefault();
        const {validationErrors, err} = validateVerifyCode({resetCode});
        setErrors(validationErrors)
        if(err) return;
        dispatch(verifyResetCode({resetCode}, setPath, setkey));
    }

    return(
        <>
            <h1 className="text-4xl font-bold text-primaryColor">Verify Code</h1>
            <SocialMedia/>
            <p className="text-secondryColor font-bold text-md">write the code here please to Verify your email</p>

            <form className="w-full flex flex-col justify-center items-center gap-6" onSubmit={verifyCodeHandler}>
                <div className="w-full">
                    <Input type="number" placeholder="Code Number" onChange={(e)=>setResetCode(e.target.value)} size="lg"
                        className="!border !border-gray-300 text-primaryColor shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-main focus:!border-t-main focus:ring-main"
                        labelProps={{className: "hidden"}}containerProps={{ className: "min-w-[100px]" }} />
                    <ErrorParagraph err={errors.resetCode}/>
                </div>
                <p className="text-secondryColor font-bold text-md">check your email please</p>
                <Button loading={verifyedCode} type="submit" className="px-10 py-2 bg-main text-primaryColor text-lg">VERIFY CODE</Button>
            </form>
        </>
    )
}

export default VerifyCode;