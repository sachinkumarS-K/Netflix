import React, { useEffect } from 'react'
import { addTrailerVideo } from '../redux/movieSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { options } from '../utils/constant';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  async function getMovieTrailer() {
    const res = await axios.request(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    //console.log(res)
    const trailerVideo = res.data.results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailerVideo[0]));
  }
  useEffect(() => {
    getMovieTrailer();
  } , []);
  return <div></div>;
};

export default useMovieTrailer
