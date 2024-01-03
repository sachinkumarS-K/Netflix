import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MovieList = ({ title , movies }) => {
 const slide = useRef(null)
  //console.log(movies)
  return (
    <div className=" lg:-translate-y-28 md:-translate-y-24 z-20">
      {movies && (
        <div className=" overflow-x-scroll no-scrollbar">
          <h1 className="lg:px-6  px-3 text-2xl font-bold tracking-wider text-white py-2 lg:py-4 lg:text-4xl">
            {" "}
            {title}
          </h1>
          <div className="flex ">
            {movies.map((movie) => (
              <div key={movie.id} ref={slide} className=" ">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList
