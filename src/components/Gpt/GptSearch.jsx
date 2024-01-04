import React, { useRef, useState } from 'react'

import { langConst } from '../../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../../utils/openai';
import axios from 'axios';
import { addGptMovieResult } from '../../redux/slices/gptSlice';
import Spinner from "../Loader/Spinner"
import GptMovies from './GptMovies';
const GptSearch = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.config.lang);
  const searchText = useRef(null);
  const [spinner , setSpinner] = useState(false)

  async function submitHandler(e) {
  setSpinner(true)
    e.preventDefault();
  console.log(searchText.current.value);
  
  const query = `Act as a movie recommendation system and suggest some movie for the query : ${searchText.current.value} . only give me name of 11 movies, comma seperated like the example result given ahead. Example Result : Don , Dinki , Salaar , Golmaal , fighter`;

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });

  console.log(gptResults.choices[0]?.message?.content);
  const gptMovies = gptResults.choices[0]?.message?.content.split(",");

  const data = gptMovies.map(movie => fetchMovies(movie));
  const movieResults = await Promise.all(data);
    dispatch(addGptMovieResult(movieResults));
    setSpinner(false);
  //searchText.current.value = ""
  
  }

  async function fetchMovies(movie) {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${movie.trimStart()}&apikey=b9a4dcb1`
      );

      return res.data.Search;
    } catch (error) {
      return 
    }
    
  }
  return (
    <div className="-translate-y-10">
      {/* <div className="lg:h-screen md:h-screen w-screen lg:block hidden md:block ">
        <img src={BG_URL} className="absolute h-full w-full top-0" alt="" />
      </div> */}
      <div className=" flex   items-center justify-center text-white opacity-80 lg:w-1/2 md:w-1/2 w-[90%] mx-auto my-14">
        {spinner ? (
          <div className=" ">
            {" "}
            <Spinner />
          </div>
        ) : (
          <form
            onSubmit={submitHandler}
            className="lg:w-[80%] md:w-[80%] w-full flex lg:flex-row flex-col gap-6 lg:gap-10 items-center outline-black lg:justify-center"
          >
            <input
              type="text"
              className="w-full placeholder:text-gray-900 md:text-lg h-full border-2 border-black text-black indent-4 text-lg py-3 rounded-lg "
              name=""
              placeholder={langConst[lang].gptPlaceHolder}
              ref={searchText}
            />
            <button className="py-2  lg:px-10 md:px-10 px-10 text-xl font-semibold  bg-red-400 rounded-xl float-end ">
              {langConst[lang].search}
            </button>
          </form>
        )}
      </div>
      <div className="">
        <GptMovies />
      </div>
    </div>
  );
}

export default GptSearch
