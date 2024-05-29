import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationElement from "../global/pagination-element";
import { getUsers } from "../../../state/actions/profile-action";

const UsersPagination = ({search}) => {

    const dispatch = useDispatch();
    const limit = "10";

    const {mainUsers, pagination} = useSelector(state => state.profile);
    
    const filterMainProfiles = () => mainUsers.filter((profile)=> 
        profile.username.includes(search) || profile.livesin?.includes(search))

    const searchHandler = () => search? 
        `&length=${String(filterMainProfiles().length)}&search=username,livesin&searchBy=${search}`: "";

    useEffect(() => {
        filterMainProfiles();
        dispatch(getUsers(`page=1&limit=${limit}${searchHandler()}`));
    }, [search]);
    
    const next = () => pagination.next && dispatch(getUsers(`page=${pagination.next}&limit=${limit}&${searchHandler()}`));
    const prev = () => pagination.prev && dispatch(getUsers(`page=${pagination.prev}&limit=${limit}&${searchHandler()}`));


    return <PaginationElement pagination={pagination} prev={prev} next={next}/>

}

export default UsersPagination