import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
   name: "post",
   initialState: {
    posts: [],
    mainPosts: [],
    userPosts: [],
    followingPosts: [],
    pagination: {},
    postsCount: 0,
    userPostsCount: 0,
    loadingPosts: false,
    loadingCountPosts: false,
    loadingFollowingPosts: false,
    loadingLikesPost: false,
    updated: false,
    created: false,
   },
   
   reducers: {
      
      setPosts(state, action){
         state.posts = action.payload.posts;
         state.mainPosts = action.payload.mainPosts;
      },

      setPagination(state, action){
        state.pagination = action.payload.paginationResult;
      },

      setUserPosts(state, action){
        state.userPosts = action.payload.user.posts;
      },

      setFollowingPosts(state, action){
        state.followingPosts = action.payload.posts;
      },

      setPostsCount(state, action){
        state.postsCount = action.payload;
      },

      setIsFollowed(state, action){
        state.followingPosts.forEach((post)=> post.id == action.payload.like.postId ?
        post.likes.forEach((like) => like.id == action.payload.like.id ?like.user.followers = action.payload.newUser.followers : like) : post)
        state.userPosts.forEach((post)=> post.id == action.payload.like.postId ?
        post.likes.forEach((like) => like.id == action.payload.like.id ?like.user.followers = action.payload.newUser.followers : like) : post)
      },

      setUserPostsCount(state, action){
        state.userPostsCount = action.payload.user.posts.length;
      },

      createPost(state, action){
        state.userPosts.push(action.payload.post);
        state.followingPosts.push(action.payload.post);
      },

      setLike(state, action){
        state.userPosts.forEach((post)=>post.id == action.payload.post.id? post.likes = action.payload.post.likes : post);
        state.followingPosts.forEach((post)=>post.id == action.payload.post.id? post.likes = action.payload.post.likes : post);
      },

      updatePost(state, action){
        state.userPosts = state.userPosts.map((post)=>post.id == action.payload.post.id ? action.payload.post : post);
        state.followingPosts = state.followingPosts.map((post)=>post.id == action.payload.post.id ? action.payload.post : post);
      },

      deletePost(state, action){
        state.userPosts = state.userPosts.filter((post)=>post.id != action.payload);
        state.followingPosts = state.followingPosts.filter((post)=>post.id != action.payload);
      },

      addCommentToPost(state, action){
        state.userPosts.forEach((post)=>post.id == action.payload.comment.postId? post.comments.push(action.payload.comment): null);
        state.followingPosts.forEach((post)=>post.id == action.payload.comment.postId? post.comments.push(action.payload.comment): null);
      },

      updateCommentPost(state, action){
        state.userPosts.forEach((post)=>post.id == action.payload.comment.postId? 
        post.comments = post.comments.map((comment)=>comment.id == action.payload.comment.id? action.payload.comment : comment) : post);
        state.followingPosts.forEach((post)=>post.id == action.payload.comment.postId? 
        post.comments = post.comments.map((comment)=>comment.id == action.payload.comment.id? action.payload.comment : comment) : post);
      },

      deleteCommentFromPost(state, action){
        state.userPosts.forEach((post)=>post.id == action.payload.postId? 
        post.comments =  post.comments.filter((comment)=>comment.id != action.payload.id) : post);
        state.followingPosts.forEach((post)=>post.id == action.payload.postId? 
        post.comments =  post.comments.filter((comment)=>comment.id != action.payload.id) : post);
      },

      deletePostAdmin(state, action){
        state.posts = state.posts.filter((post)=>post.id != action.payload);
      },

      startLoadingPosts(state){ state.loadingPosts = true },
      endLoadingPosts(state){ state.loadingPosts = false },

      startLoadingCountPosts(state){ state.loadingCountPosts = true },
      endLoadingCountPosts(state){ state.loadingCountPosts = false },

      startLoadingFollowingPosts(state){ state.loadingFollowingPosts = true },
      endLoadingFollowingPosts(state){ state.loadingFollowingPosts = false },

      startLoadingLikesPost(state){ state.loadingLikesPost = true },
      endLoadingLikesPost(state){ state.loadingLikesPost = false },

      startCreating(state){ state.created = true },
      endCreating(state){ state.created = false },

      startUpdating(state){ state.updated = true },
      endUpdating(state){ state.updated = false },
   }
});

const postReducer = postSlice.reducer;
const postActions = postSlice.actions;

export { postActions, postReducer }