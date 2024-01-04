import React from 'react'
import { posterPath } from '../../utils/constant';

const MovieCard = ({ movie }) => {
  //console.log(movie)
  return (
    <div>
      <div className="lg:w-[15rem] md:w-[14rem] w-[12rem]  mr-4 rounded-lg shadow-sm shadow-gray-500 overflow-hidden">
        <img
          className="w-full object-cover h-auto "
          src={`${posterPath}${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <p className="text-white text-center pt-4 font-semibold tracking-wide lg:text-lg pr-4">
        {movie.title ? movie.title : movie.original_name}
      </p>
    </div>
  );
}

export default MovieCard
