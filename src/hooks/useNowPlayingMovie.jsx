import { useDispatch } from "react-redux";
import axios from "axios";
import { options } from "../utils/constant";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovie = () => {
      const dispatch = useDispatch();
     async function fetchData() {
       try {
         const res = await axios.request(
           "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
           options
         );
         //console.log(res.data);
         res && dispatch(addNowPlayingMovies(res.data.results));
       } catch (error) {
         console.log(error);
       }
     }
     useEffect(() => {
          fetchData()
     } , [])
  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMovie
