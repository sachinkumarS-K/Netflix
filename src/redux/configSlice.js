import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
  showUser : false,
};

const configSlice = createSlice({
     name: "config",
     initialState,
     reducers: {
          changeLanguage: (state, action) => {
               state.lang = action.payload
          },
          setShowUser: (state) => {
               state.showUser = !state.showUser
          },
          setUserFalse: (state) => {
               state.showUser = false
          }
     }
});

export const { changeLanguage, setShowUser, setUserFalse } = configSlice.actions;
export default configSlice.reducer;