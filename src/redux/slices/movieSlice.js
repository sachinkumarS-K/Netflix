import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  trailerVideo: null,
  topRated: null,
  upcoming: null,
  popularMovies: null,
  trendingMovies: null,
  tvSeries : null
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries = action.payload
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addtopRatedMovies,
  addUpcomingMovies,
  addPopularMovies,
  addTrendingMovies,
  addTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer;