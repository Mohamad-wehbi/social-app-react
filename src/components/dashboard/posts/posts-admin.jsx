import PostAdmin from "./post-admin";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchData from "../global/search-data";
import Loader from "../../global/loader";
import AdminPostSkeleton from "./post-skeleton";
import PostsPagination from "./posts-pagination";

const PostsAdmin = () => {

    const [search, setSearch] = useState("");
    const {mainPosts, posts, loadingPosts} = useSelector(state => state.post);
    
    const renderPosts = () => posts.map((post,i)=> <PostAdmin post={post} key={i} />)

    return(
            <div className="h-full flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-6">
                    <SearchData header="Posts Table" setSearch={setSearch}/>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1">
                        <Loader loading={loadingPosts} data={mainPosts.length} skeleton={<AdminPostSkeleton/>} count={6}>
                            {renderPosts()}
                        </Loader>
                    </div>
                </div>
                <PostsPagination search={search}/> 
            </div>
    )
}

export default PostsAdmin;