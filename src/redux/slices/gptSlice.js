import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptSearch: false,
  gptMovies: null,
};
const gptSlice = createSlice({
     name: "gpt",
     initialState,
     reducers: {
          toggleGptSearchView: (state, action) => {
               state.showGptSearch = !state.showGptSearch
          },
          addGptMovieResult: (state, action) => {
            state.gptMovies = action.payload
          },
          setGptFalse: (state) => {
               state.showGptSearch = false
          }
     }
});

export const { toggleGptSearchView, setGptFalse, addGptMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;