import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: "auth",
   initialState: {
      user: JSON.parse(localStorage.getItem("userInfo")) || null,
      signedup: false,
      signedin: false,
      logedout: false,
      forgotedPass: false,
      verifyedCode: false,
      resetedPass: false,
   },
   
   reducers: {
      
      signup(state, action){
         state.user = action.payload.user;
         state.user.token = action.payload.token;
         localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      },

      signin(state, action){
         state.user = action.payload.user;
         state.user.token = action.payload.token;
         localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      },

      logout(state, action){
         state.user = null;
         localStorage.removeItem("userInfo");
      },

      updateUsername(state, action){
         state.user.username = action.payload.username;
         const user = JSON.parse(localStorage.getItem("userInfo"));
         user.username = action.payload.username;
         localStorage.setItem("userInfo", JSON.stringify(user));
      },

      updateUserPhoto(state, action){
         state.user.profilePicUrl = action.payload.profilePicUrl;
         const user = JSON.parse(localStorage.getItem("userInfo"));
         user.profilePicUrl = action.payload.profilePicUrl;
         localStorage.setItem("userInfo", JSON.stringify(user));
      },

      startSignup(state){ state.signedup = true },
      endSignup(state){ state.signedup = false },

      startSignin(state){ state.signedin = true },
      endSignin(state){ state.signedin = false },

      startLogout(state){ state.logedout = true },
      endLogout(state){ state.logedout = false },

      startForgotPass(state){ state.forgotedPass = true },
      endForgotPass(state){ state.forgotedPass = false },

      startVerifyCode(state){ state.verifyedCode = true },
      endVerifyCode(state){ state.verifyedCode = false },

      startResetPass(state){ state.resetedPass = true },
      endResetPass(state){ state.resetedPass = false },
   }
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer }