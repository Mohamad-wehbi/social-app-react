import { useState } from "react";
import { useSelector } from "react-redux";
import CommentAdmin from "./comment-admin";
import SearchData from "../global/search-data";
import Loader from "../../global/loader";
import AdminCommentSkeleton from "./comment-skeleton";
import CommentsPagination from "./comments-pagination";

const CommentsAdmin = () => {

    const [search, setSearch] = useState("");
    const {mainComments, comments, loadingStories} = useSelector(state => state.comment);
    
    const renderComments = () => comments.map((comment,i)=> <CommentAdmin comment={comment} key={i} />)

    return(
        
        <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-6">
                <SearchData header="Comments Table" setSearch={setSearch}/>
                <div className="grid md:grid-cols-2 gap-1">
                    <Loader loading={loadingStories} data={mainComments.length} skeleton={<AdminCommentSkeleton/>} count={12}>
                        {renderComments()}
                    </Loader>
                </div>
            </div>
            <CommentsPagination search={search}/> 
        </div>
    )
}

export default CommentsAdmin;