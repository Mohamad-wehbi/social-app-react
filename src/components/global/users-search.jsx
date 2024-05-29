import { useDispatch, useSelector } from "react-redux";
import Search from "../home/global/search";
import { getUsers } from "../../state/actions/profile-action";
import { BiSearchAlt2 } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

const UsersSearch = () => {

    const dispatch = useDispatch();
    const users = () => dispatch(getUsers());
    
    const {profiles} = useSelector(state => state.profile);
    const {user} = useSelector(state => state.auth);

    const filteringUsers = () => profiles.filter((profile)=> profile.id != user.id)

    return(
        <>
            <Search profiles={filteringUsers()} handler={users} keys={false}>
                <Button className="flex justify-center items-center px-8 py-2 bg-main text-white text-sm">
                    <div className="font-extrabold">Search...</div>
                    <BiSearchAlt2 className="text-lg"/>
                </Button>
            </Search>
        </>

    )
}

export default UsersSearch;