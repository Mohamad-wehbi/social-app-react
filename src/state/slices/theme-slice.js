import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
   name: "theme",
   initialState: {
      theme: localStorage.getItem("theme") || null},
   
   reducers: {
      
      setLightMode(state, action){
         state.theme = "light";
         localStorage.setItem("theme", "light");
       },

      setDarkMode(state, action){
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      },

      theme(state, action){
        if (state.theme) document.body.classList = [];
        if (state.theme) document.body.classList.add(state.theme);
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.add("dark");
        else document.body.classList.add("light");
      },
   }
});

const themeReducer = themeSlice.reducer;
const themeActions = themeSlice.actions;

export { themeActions, themeReducer }