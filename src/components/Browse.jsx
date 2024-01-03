import React, { useEffect } from 'react'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header from './Header';

const Browse = () => {
  const showGptSearchView = useSelector((state) => state.gtp.showGptSearch);
  useNowPlayingMovie();
  
  return (
    <div>
      {showGptSearchView ? (
        <div >
          <GptSearch />
        </div>
      ) : (
        <div>
          <MainContainer />
          <SecondryContainer />{" "}
        </div>
      )}
    </div>
  );
}

export default Browse
