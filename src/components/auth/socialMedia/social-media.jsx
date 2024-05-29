import { MdOutlineEmail } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import cv from "./resume.pdf";

const SocialMedia = () =>{

    return(
            <div className="flex justify-center items-center gap-6 text-primaryColor">
                <a href="mailto:m.wehbi7066@gmail.com" className="p-2 border-2 rounded-md cursor-pointer"><MdOutlineEmail/></a>
                <a href={cv} download="MohamadWehbi.pdf" className="p-2 border-2 rounded-md cursor-pointer"><BsPersonVcard /></a>
                <a href="https://github.com/mohamad-wehbi" className="p-2 border-2 rounded-md cursor-pointer"><AiOutlineGithub/></a>
                <a href="https://www.linkedin.com/in/mohamad-wehbi" className="p-2 border-2 rounded-md cursor-pointer"><BiLogoLinkedin/></a>
            </div>
    )
}

export default SocialMedia;