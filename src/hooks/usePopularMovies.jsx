import axios from 'axios';
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, addtopRatedMovies } from '../redux/slices/movieSlice';

function usePopularMovies() {
     const popularMovies = useSelector((state) => state.movies.popularMovies);
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
       !popularMovies &&   getData();
     } , [])
}

export default usePopularMovies
