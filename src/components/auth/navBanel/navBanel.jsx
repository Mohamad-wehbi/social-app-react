import { Button } from "@material-tailwind/react";


const NavBanel = ({data, setPath, setKey}) => {

    const path = () =>{
        setKey(n=>!n);
        setPath(data.path)
    }

    return (
        < >
            <h1 className="text-5xl font-extrabold text-primaryColor">{data.header}</h1>
            <p className="text-primaryColor font-bold text-md text-center">{data.desc}</p>
            <Button variant="text" onClick={path} className="border-2 border-primaryColor px-10 py-2 text-primaryColor text-lg">{data.button}</Button>
        </>
    )
}

export default NavBanel;