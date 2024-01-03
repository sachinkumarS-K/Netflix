import React from 'react'
import { BG_URL } from '../utils/constant'
import { langConst } from '../utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearch = () => {
  const lang = useSelector(state => state.config.lang)
  return (
    <div className="">
      <div className="lg:h-screen md:h-screen w-screen lg:block hidden md:block ">
        <img src={BG_URL} className="absolute h-full w-full top-0" alt="" />
      </div>
      <div className="lg:translate-x-[50%] md:translate-x-[50%] md:translate-y-[90%] lg:translate-y-[90%] lg:top-[10%] md:top-[10%] z-20 lg:absolute md:absolute flex items-center justify-center text-white opacity-80 lg:w-1/2 md:w-1/2 w-[90%] mx-auto my-14">
        <div className="lg:w-[80%] md:w-[80%] w-full flex lg:flex-row flex-col gap-6 lg:gap-10 items-center outline-black lg:justify-center">
          <input
            type="text"
            className="w-full placeholder:text-gray-900  h-full border-2 border-black text-black indent-4 text-xl py-3 rounded-lg "
            name=""
            placeholder={langConst[lang].gptPlaceHolder}
            id=""
          />
          <button className="py-2  lg:px-10 md:px-10 px-10 text-xl font-semibold  bg-red-400 rounded-xl float-end ">
            {langConst[lang].search}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GptSearch
