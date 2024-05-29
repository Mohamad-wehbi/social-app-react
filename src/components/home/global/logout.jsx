import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../state/actions/auth-action";
import { useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {logedout} = useSelector(state => state.auth);

    const logoutHandler = () => dispatch(logout(navigate));

    return(
        <>
            <Button loading={logedout} onClick={logoutHandler}  className="bg-main w-full text-sm rounded-md font-extrabold text-white mb-2">
                    Logout
            </Button>
        </>
    )
}

export default Logout;