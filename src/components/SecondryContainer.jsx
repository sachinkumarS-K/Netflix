import React from 'react'
import MovieList from './MovieList'
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTendingMovies from '../hooks/useTendingMovies';
import { addTrendingMovies } from '../redux/movieSlice';
import useTvSeries from '../hooks/useTvSeries';

const SecondryContainer = () => {
  usePopularMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTendingMovies();
  useTvSeries();
   const allMovies = useSelector((state) => state.movies);
  const { nowPlayingMovies, topRated, upcoming, popularMovies,trendingMovies , tvSeries } = allMovies;
  return (
    <div className="relative z-20">
      <div className="lg:-mt-48 bg-black px-7">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Tv Series"} movies={tvSeries} />
        <MovieList title={"Trending"} movies={trendingMovies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upcoming} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
}

export default SecondryContainer
