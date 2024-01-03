import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { addTrendingMovies, addtopRatedMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useTendingMovies = () => {
const dispatch = useDispatch()
     async function getData() {
          const res = await axios.request('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
           dispatch(addTrendingMovies(res.data.results));
     }
     useEffect(() => {
          getData()
     } , [])
}

export default useTendingMovies
