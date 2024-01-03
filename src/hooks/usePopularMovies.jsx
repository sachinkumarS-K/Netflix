import axios from 'axios';
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies, addtopRatedMovies } from '../redux/movieSlice';

function usePopularMovies() {
     const dispatch = useDispatch()
     async function getData() {
          try {
               const res = await axios.request(
                 "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
               ,options);
               
                res && dispatch(addPopularMovies(res.data.results));
          } catch (error) {
               console.log(data)
          }
     }
     useEffect(() => {
          getData();
     } , [])
}

export default usePopularMovies
