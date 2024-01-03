
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoContainer = ({ movieId }) => {
   const trailer = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);
  
  if (!trailer) {
    return
  }
  return (
    <div className="max-w-screen overflow-hidden ">
      <iframe
        className="w-full lg:aspect-video md:aspect-video sm:aspect-video aspect-[10/7]"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=-ErlYaHFFG5cg3Vf&rel=0&autoplay=1&controls=0&showinfo=0&mute=1&loop=1&iv_load_policy=3&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoContainer
