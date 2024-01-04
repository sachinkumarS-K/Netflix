import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './videoContainer/VideoTitle';
import VideoContainer from './videoContainer/VideoContainer';

const MainContainer = () => {
     const movies = useSelector((state) => state.movies?.nowPlayingMovies);
     if(!movies) return

     //console.log(movies);
     
     const mainMovie = movies[2];
     //console.log(mainMovie);
     const { original_title, overview , id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview = {overview}  />
      <VideoContainer movieId = {id} />
    </div>
  );
}

export default MainContainer
