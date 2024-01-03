import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/constant';
import { addTvSeries } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useTvSeries = () => {
const dispatch = useDispatch()
     async function getData() {
     try {
          const res = await axios.request(
            "https://api.themoviedb.org/3/trending/all/day?language=en-US", options
          );
          console.log(res.data)
          dispatch(addTvSeries(res.data.results));
     } catch (error) {
          
     }
}

     useEffect(() => {
               getData()
     } , [])
  return (
    <div>
      
    </div>
  )
}

export default useTvSeries
