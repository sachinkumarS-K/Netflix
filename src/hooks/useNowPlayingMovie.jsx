import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { options } from "../utils/constant";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovie = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
      const dispatch = useDispatch();
     async function fetchData() {
       try {
         const res = await axios.request(
           "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
           options
         );
         res && dispatch(addNowPlayingMovies(res.data.results));
       } catch (error) {
         console.log(error);
       }
     }
     useEffect(() => {
        !nowPlayingMovies &&  fetchData()
     } , [])
  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMovie
