import React from 'react'
import { useSelector } from 'react-redux'
import GptMovieCard from './GptMovieCard';

const GptMovies = () => {
     const gptMovies = useSelector((state) => state.gtp.gptMovies);
     //console.log(gptMovies)
  return (
    <div className=" w-full ">
      <div className="w-[70%] mx-auto flex lg:flex-row flex-col flex-wrap lg:gap-5 ">
        {gptMovies && gptMovies.map((movie, idx) => (
          <GptMovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default GptMovies
