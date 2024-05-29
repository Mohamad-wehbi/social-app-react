import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
   name: "profile",
   initialState: {
    profiles: [],
    randomUsers: [],
    mainUsers: [],
    following: [],
    followers: [],
    profile: {},
    pagination: {},
    usersCount: 0,
    updatedInfo: false,
    updatedEmail: false,
    updatedPass: false,
    updatedUsername: false,
    updatedPhoto: false,
    updatedCover: false,
    loadingUsers: false,
    loadingCountUsers: false,
    loadingProfile: false,
    loadingDefaultProfile: false,
    loadingRandomUsers: false,
    loadingFollowing: false,
    loadingFollowers: false,
   },
   
   reducers: {

      setProfiles(state, action){
        state.profiles = action.payload.users;
        state.mainUsers = action.payload.mainUsers;
     },

     setRandomUsers(state, action){
      state.randomUsers = action.payload.users.slice(-4);
   },

      setPagination(state, action){
        state.pagination = action.payload.paginationResult;
      },

      setFollowing(state, action){
        state.following = action.payload.following;
      },

      setFollowers(state, action){
        state.followers = action.payload.followers;
      },

      setIsFollowed(state, action){
        state.profiles.forEach((profile)=> profile.id == action.payload.newUser.id? profile.followers = action.payload.newUser.followers : profile)
        state.randomUsers.forEach((profile)=> profile.id == action.payload.newUser.id? profile.followers = action.payload.newUser.followers : profile)
        state.following.forEach((profile)=> profile.id == action.payload.newUser.id? profile.followers = action.payload.newUser.followers : profile)
        state.followers.forEach((profile)=> profile.id == action.payload.newUser.id? profile.followers = action.payload.newUser.followers : profile)
      },

      chengeFollowing(state, action){
        state.profile.id == action.payload.newMe.id? state.profile.following = action.payload.newMe.following : null;
      },

      setProfile(state, action){
        state.profile = action.payload.user;
     },

      updateProfile(state, action){
        state.profile = action.payload.user;
      },

      deleteProfileAdmin(state, action){
        state.profiles = state.profiles.filter((user)=>user.id != action.payload)
      },

      deleteProfilePhoto(state, action){
        state.profile.profilePicUrl = action.payload.profilePicUrl;
      },

      deleteProfileCover(state, action){
        state.profile.coverPicUrl = action.payload.coverPicUrl;
      },

      updateProfilePhoto(state, action){
        state.profile.profilePicUrl = action.payload.profilePicUrl;
      },

      updateProfileCover(state, action){
        state.profile.coverPicUrl = action.payload.coverPicUrl;
      },

      updateUsername(state, action){
        state.profile.username = action.payload.username;
      },

      updateEmail(state, action){
        state.profile.email = action.payload.email;
      },

      setProfilesCount(state, action){
        state.usersCount = action.payload;
      },

      startLoadingUsers(state){ state.loadingUsers = true },
      endLoadingUsers(state){ state.loadingUsers = false },

      startLoadingCountUsers(state){ state.loadingCountUsers = true },
      endLoadingCountUsers(state){ state.loadingCountUsers = false },

      startLoadingProfile(state){ state.loadingProfile = true },
      endLoadingProfile(state){ state.loadingProfile = false },

      startLoadingDefaultProfile(state){ state.loadingDefaultProfile = true },
      endLoadingDefaultProfile(state){ state.loadingDefaultProfile = false },

      startLoadingRandomUsers(state){ state.loadingRandomUsers = true },
      endLoadingRandomUsers(state){ state.loadingRandomUsers = false },

      startLoadingFollowing(state){ state.loadingFollowing = true },
      endLoadingFollowing(state){ state.loadingFollowing = false },

      startLoadingFollowers(state){ state.loadingFollowers = true },
      endLoadingFollowers(state){ state.loadingFollowers = false },

      startUpdatingInfo(state){ state.updatedInfo = true },
      endUpdatingInfo(state){ state.updatedInfo = false },

      startUpdatingEmail(state){ state.updatedEmail = true },
      endUpdatingEmail(state){ state.updatedEmail = false },

      startUpdatingPass(state){ state.updatedPass = true },
      endUpdatingPass(state){ state.updatedPass = false },

      startUpdatingUsername(state){ state.updatedUsername = true },
      endUpdatingUsername(state){ state.updatedUsername = false },

      startUpdatingPhoto(state){ state.updatedPhoto = true },
      endUpdatingPhoto(state){ state.updatedPhoto = false },

      startUpdatingCover(state){ state.updatedCover = true },
      endUpdatingCover(state){ state.updatedCover = false },
   }
});

const profileReducer = profileSlice.reducer;
const profileActions = profileSlice.actions;

export { profileActions, profileReducer }