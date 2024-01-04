import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { addTrendingMovies, addtopRatedMovies } from '../redux/slices/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useTendingMovies = () => {
     const trendingMovies = useSelector((state) => state.movies.trendingMovies);
const dispatch = useDispatch()
     async function getData() {
          const res = await axios.request('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
           dispatch(addTrendingMovies(res.data.results));
     }
     useEffect(() => {
       !trendingMovies &&   getData()
     } , [])
}

export default useTendingMovies
