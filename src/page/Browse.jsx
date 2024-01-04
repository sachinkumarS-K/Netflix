import React, { useEffect } from 'react'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from '../components/MainContainer';
import SecondryContainer from '../components/SecondryContainer';
import { useSelector } from 'react-redux';
import GptSearch from '../components/Gpt/GptSearch';

const Browse = () => {


  const showGptSearchView = useSelector((state) => state.gtp.showGptSearch);
  useNowPlayingMovie();
  
  return (
    <div>
      {showGptSearchView ? (
        <div className="">
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
