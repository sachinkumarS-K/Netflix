import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { addUpcomingMovies, addtopRatedMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = () => {
const dispatch = useDispatch()
     async function getData() {
          try {
                const res = await axios.request(
                  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
                  options
               );
                 res && dispatch(addUpcomingMovies(res.data.results));
          } catch (error) {
               console.log(error)
          }
     }

     useEffect(() => {
         getData()
     },[])
  return (
    <div>
      
    </div>
  )
}

export default useUpcomingMovies
