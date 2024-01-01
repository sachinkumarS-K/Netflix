import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import movieSlice from "./movieSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
  },
});

export default store;