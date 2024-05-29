import { useEffect } from "react";
import Story from "./story";
import CreatePost from "../post/create-post";
import CreateStory from "./create-story";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingStories } from "../../../state/actions/story-action";
import { IoMdImages } from "react-icons/io";
import StorySkeletonCover from "./story-skeleton-cover";
import Loader from "../../global/loader";

const FollowingStories = () => {

    const dispatch = useDispatch();
    const {profile} = useSelector(state=> state.profile);
    useEffect(()=> {dispatch(getFollowingStories())}, [profile.following]);
    const {followingStories, loadingFollowingStories} = useSelector(state => state.story);

    const renderStory = () => followingStories?.map((story,i)=><Story story={story} key={i}/>)


    return(
        
        <div className="card">
            <div className="mx-[-15px]">
                <div className="flex gap-[13px] overflow-auto items-center pb-2 mb-2 border-b-4 border-secondry">
                    <CreateStory/>
                    <Loader loading={loadingFollowingStories} data={followingStories.length} skeleton={<StorySkeletonCover/>} count={12}>
                        {renderStory()}
                    </Loader>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex justify-center items-end gap-2">
                        <IoMdImages className="font-bold text-main text-3xl"/>
                        <h2 className="font-bold text-lg text-primaryColor">All Posts :</h2>
                    </div>
                    <CreatePost/>
                </div>
            </div>
        </div>
        
    )
}

export default FollowingStories;