import { useSelector } from "react-redux";


const IsLogedin = ({children}) => {

    const {user} = useSelector(state => state.auth)

    return(
            <>
                { user? children : null }
            </>
    )
}

export default IsLogedin;