import { useState } from "react";
import { useSelector } from "react-redux";
import StoryAdmin from "./story-admin";
import SearchData from "../global/search-data";
import Loader from "../../global/loader";
import AdminStorySkeleton from "./story-skeleton";
import StoriesPagination from "./stories-pagination";

const StoriesAdmin = () => {

    const [search, setSearch] = useState("");
    const {mainStories, stories, loadingStories} = useSelector(state => state.story);
    
    const renderStories = () => stories.map((story,i)=> <StoryAdmin story={story} key={i} />)

    return(
            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                    <SearchData header="Stories Table" setSearch={setSearch}/>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1">
                        <Loader loading={loadingStories} data={mainStories.length} skeleton={<AdminStorySkeleton/>} count={9}>
                            {renderStories()}
                        </Loader>
                    </div>
                </div>
                <StoriesPagination search={search}/> 
            </div>
    )
}

export default StoriesAdmin;