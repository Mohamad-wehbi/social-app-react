import { useSelector } from "react-redux"
import UserSkeleton from "./user-skeleton";

const UserLoading = ({children}) => {

    const {loadingProfile} = useSelector(state=> state.profile);
    const renderSkeleton = () => [...Array(1)].map(()=> <UserSkeleton/>)

    return(
        <>
            {loadingProfile?renderSkeleton():children}
        </>

    )
}

export default UserLoading;