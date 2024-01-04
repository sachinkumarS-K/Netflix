import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, addtopRatedMovies } from '../redux/slices/movieSlice';

const useTopRatedMovies = () => {
     const topRatedMovies = useSelector((state) => state.movies.topRated);
const dispatch  = useDispatch()
     async function getData() {
          try {
            const res = await axios.request(
              "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
              options
               );
               dispatch(addtopRatedMovies(res.data.results))
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(() => {
       !topRatedMovies &&   getData()
     },[])
  return (
    <div>
      
    </div>
  )
}

export default useTopRatedMovies
