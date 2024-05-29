import { useSelector } from "react-redux";


const IsAdmin = ({children}) => {

    const {user} = useSelector(state => state.auth)

    return(
            <>
                { user?.role == "ADMIN" ? children : null }
            </>
    )
}

export default IsAdmin;