import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { addUpcomingMovies, addtopRatedMovies } from '../redux/slices/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((state) => state.movies.upcoming);
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
      !upcomingMovies &&   getData()
     },[])
  return (
    <div>
      
    </div>
  )
}

export default useUpcomingMovies
