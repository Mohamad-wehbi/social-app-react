import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
   name: "story",
   initialState: {
    stories: [],
    mainStories: [],
    followingStories: [],
    storiesIds:[],
    pagination: {},
    storiesCount: 0,
    loadingStories: false,
    loadingCountStories: false,
    loadingFollowingStories: false,
    created: false,
   },
   
   reducers: {
      
      setStories(state, action){
         state.stories = action.payload.stories;
         state.mainStories = action.payload.mainStories;
      },

      setPagination(state, action){
        state.pagination = action.payload.paginationResult;
      },

      setFollowingStories(state, action){
        state.followingStories = action.payload.stories;
        state.storiesIds = action.payload.usersIds;
     },

      setStoriesCount(state, action){
        state.storiesCount = action.payload;
      },

      createStory(state, action){
        let index = -1;
        if(!state.followingStories.length) state.followingStories.unshift([action.payload.story]) ;
        else if(state.followingStories.length) {
          index = state.storiesIds.findIndex((id)=>id == action.payload.story.userId)
          if(index >= 0) state.followingStories[index].unshift(action.payload.story)
          else {
            state.followingStories.unshift([action.payload.story])
            state.storiesIds.unshift([action.payload.story.userId]) }}
      },

      deleteStory(state, action){
        state.followingStories = state.followingStories.map((story)=>story.filter((ele)=> ele.id != action.payload));
        state.followingStories = state.followingStories.filter((story)=> story.length)
      },

      deleteStoryAdmin(state, action){
        state.stories = state.stories.filter((story)=>story.id != action.payload);
      },

      startLoadingStories(state){ state.loadingStories = true },
      endLoadingStories(state){ state.loadingStories = false },

      startLoadingCountStories(state){ state.loadingCountStories = true },
      endLoadingCountStories(state){ state.loadingCountStories = false },

      startLoadingFollowingStories(state){ state.loadingFollowingStories = true },
      endLoadingFollowingStories(state){ state.loadingFollowingStories = false },

      startCreating(state){ state.created = true },
      endCreating(state){ state.created = false },
   }
});

const storyReducer = storySlice.reducer;
const storyActions = storySlice.actions;

export { storyActions, storyReducer }