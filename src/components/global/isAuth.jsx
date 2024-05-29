import { useSelector } from "react-redux";


const IsAuth = ({children, userId}) => {

    const {user} = useSelector(state => state.auth)

    return(
            <>
                { user.id == userId? children : null }
            </>
    )
}

export default IsAuth;