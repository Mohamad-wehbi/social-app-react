import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationElement from "../global/pagination-element";
import { getStories } from "../../../state/actions/story-action";

const StoriesPagination = ({search}) => {

    const dispatch = useDispatch();
    const limit = "9";

    const {mainStories, pagination} = useSelector(state => state.story);
    
    const filterMainStories = () => mainStories.filter((story)=> story.desc.includes(search))

    const searchHandler = () => search? 
        `&length=${String(filterMainStories().length)}&search=desc&searchBy=${search}`: "";

    useEffect(() => {
        filterMainStories();
        dispatch(getStories(`page=1&limit=${limit}${searchHandler()}`))
    }, [search]);
    
    const next = () => pagination.next && dispatch(getStories(`page=${pagination.next}&limit=${limit}&${searchHandler()}`));
    const prev = () => pagination.prev && dispatch(getStories(`page=${pagination.prev}&limit=${limit}&${searchHandler()}`));

    return <PaginationElement pagination={pagination} prev={prev} next={next}/>

}

export default StoriesPagination