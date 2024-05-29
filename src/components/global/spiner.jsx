import { BiLoaderCircle } from "react-icons/bi";

const Spiner = ({bool, desc}) => {

    return(

        bool? 
            <div className="flex justify-between items-center gap-1">
                <BiLoaderCircle className="text-2xl animate-spin my-[-5px]" />loading
            </div>
        : desc
    )
}

export default Spiner
    