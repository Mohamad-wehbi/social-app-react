import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationElement from "../global/pagination-element";
import { getComments } from "../../../state/actions/comment-action";

const CommentsPagination = ({search}) => {

    const dispatch = useDispatch();
    const limit = "14";

    const {mainComments, pagination} = useSelector(state => state.comment);
    
    const filterMainComments = () => mainComments.filter((comment)=> comment.desc.includes(search))

    const searchHandler = () => search? 
        `&length=${String(filterMainComments().length)}&search=desc&searchBy=${search}`: "";

    useEffect(() => {
        filterMainComments();
        dispatch(getComments(`page=1&limit=${limit}${searchHandler()}`))
    }, [search]);
    
    const next = () => pagination.next && dispatch(getComments(`page=${pagination.next}&limit=${limit}&${searchHandler()}`));
    const prev = () => pagination.prev && dispatch(getComments(`page=${pagination.prev}&limit=${limit}&${searchHandler()}`));

    return <PaginationElement pagination={pagination} prev={prev} next={next}/>

}

export default CommentsPagination