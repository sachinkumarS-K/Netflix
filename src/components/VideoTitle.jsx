import React from 'react'
import { FaPlay } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai"
const VideoTitle = ({title , overview }) => {
     return (
       <div className="pt-[15%] max-w-screen bg-gradient-to-r from-black   lg:aspect-video md:aspect-video sm:aspect-video aspect-[11/7] px-10 lg:px-16 absolute">
         <h1 className="lg:text-3xl text-xl lg:opacity-100 opacity-70 text-white font-bold pb-5">
           {title}
         </h1>
         <p className="text-lg lg:w-[31%] lg:block md:block hidden w-1/2 text-white lg:pb-5">
           {overview}
         </p>
         <div className="flex gap-3 pt-5 items-center">
           <button
             className="flex items-center gap-2 bg-white opacity-85 text-sm lg:text-lg font-medium text-black 
           px-6 lg:px-6 py-2 lg:py-1.5 rounded "
           >
             <FaPlay className=" text-black  text-lg " />
             Play
           </button>

           <button className="flex items-center gap-2 bg-gray-100 opacity-50 text-xs lg:text-lg font-medium text-black px-4 lg:px-6 py-2 lg:py-1.5 rounded hover:opacity-90">
             <AiOutlineExclamationCircle className=" text-black text-xl " />
             More Info
           </button>
         </div>
       </div>
     );
};

export default VideoTitle
