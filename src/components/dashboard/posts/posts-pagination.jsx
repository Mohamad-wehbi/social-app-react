import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PaginationElement from "../global/pagination-element";
import { getPosts } from "../../../state/actions/post-action";

const PostsPagination = ({search}) => {

    const dispatch = useDispatch();
    const limit = "6";

    const {mainPosts, pagination} = useSelector(state => state.post);
    
    const filterMainPosts = () => mainPosts.filter((post)=> post.desc.includes(search))

    const searchHandler = () => search? 
        `&length=${String(filterMainPosts().length)}&search=desc&searchBy=${search}`: "";

    useEffect(() => {
        filterMainPosts();
        dispatch(getPosts(`page=1&limit=${limit}${searchHandler()}`))
    }, [search]);
    
    const next = () => pagination.next && dispatch(getPosts(`page=${pagination.next}&limit=${limit}&${searchHandler()}`));
    const prev = () => pagination.prev && dispatch(getPosts(`page=${pagination.prev}&limit=${limit}&${searchHandler()}`));

    return <PaginationElement pagination={pagination} prev={prev} next={next}/>

}

export default PostsPagination