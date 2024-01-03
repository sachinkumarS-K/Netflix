import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies, addtopRatedMovies } from '../redux/movieSlice';

const useTopRatedMovies = () => {
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
          getData()
     },[])
  return (
    <div>
      
    </div>
  )
}

export default useTopRatedMovies
