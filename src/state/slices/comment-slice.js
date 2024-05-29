import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
   name: "comment",
   initialState: {
    comments: [],
    mainComments: [],
    pagination: {},
    commentsCount: 0,
    updated:false,
    loadingComments: false,
    loadingCountComments: false,
   },
   
   reducers: {
      
      setComments(state, action){
         state.comments = action.payload.comments;
         state.mainComments = action.payload.mainComments;
      },

      setPagination(state, action){
        state.pagination = action.payload.paginationResult;
      },

      setCommentsCount(state, action){
        state.commentsCount = action.payload;
      },

      deleteCommentAdmin(state, action){
        state.comments = state.comments.filter((comment)=>comment.id != action.payload);
      },

      startLoadingComments(state){ state.loadingComments = true },
      endLoadingComments(state){ state.loadingComments = false },

      startLoadingCountComments(state){ state.loadingCountComments = true },
      endLoadingCountComments(state){ state.loadingCountComments = false },

      startUpdated(state){ state.updated = true },
      endUpdated(state){ state.updated = false },
   }
});

const commentReducer = commentSlice.reducer;
const commentActions = commentSlice.actions;

export { commentActions, commentReducer }