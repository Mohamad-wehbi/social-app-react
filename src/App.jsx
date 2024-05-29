import {RouterProvider} from "react-router-dom"
import { router } from "./router"
import { useEffect } from "react";
import { themeHandler } from "./state/actions/theme-action";
import { useDispatch, useSelector } from "react-redux";

export default () => {
    
    const dispatch = useDispatch();
    const {theme} = useSelector(state=> state.theme);

    useEffect(() => {dispatch(themeHandler())}, [theme]);
    
    return <RouterProvider router={router} />
}

