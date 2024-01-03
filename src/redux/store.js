import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gtp: gptReducer,
    config: configReducer,
  },
});

export default store;