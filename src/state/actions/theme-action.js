import { themeActions } from "../slices/theme-slice";

export const lightMode = () => async(dispatch) =>{
    dispatch(themeActions.setLightMode());
}

export const darkMode = () => (dispatch) =>{
    dispatch(themeActions.setDarkMode());
}

export const themeHandler = () => (dispatch) =>{
    dispatch(themeActions.theme());
}