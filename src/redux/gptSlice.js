import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     showGptSearch : false
}
const gptSlice = createSlice({
     name: "gpt",
     initialState,
     reducers: {
          toggleGptSearchView: (state, action) => {
               state.showGptSearch = !state.showGptSearch
          },
          setGptFalse: (state) => {
               state.showGptSearch = false
          }
     }
});

export const { toggleGptSearchView, setGptFalse } = gptSlice.actions;

export default gptSlice.reducer;