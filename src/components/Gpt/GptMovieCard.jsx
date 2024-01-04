import React from 'react'

const GptMovieCard = ({ movie }) => {
  console.log(movie)
  if(!movie) return
  return (
    <div className=" lg:w-1/5 md:w-1/5 mx-auto flex items-center flex-col">
    
        <div className="w-[13rem]">
          <img src={movie[0].Poster} className="w-full object-cover h-auto rounded-lg shadow-lg max-h-[17rem]" alt="" />
        </div>
        <h1 className=" text-center text-xl px-4 py-3 font-bold text-gray-500 w-full ">{movie[0].Title}</h1>
   
    </div>
  );
}

export default GptMovieCard
