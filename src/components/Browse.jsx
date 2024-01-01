import React, { useEffect } from 'react'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {

  useNowPlayingMovie();
  
  return (
    <div>
      <MainContainer />
      <SecondryContainer />
    </div>
  )
}

export default Browse
