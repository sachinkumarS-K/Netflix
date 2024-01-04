import React, { useState } from 'react'
import { Logo, supportedLang, userpic } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
 import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { toggleGptSearchView } from '../../redux/slices/gptSlice';
import UserInfo from '../UserInfo';
import { changeLanguage, setShowUser } from '../../redux/slices/configSlice';
const Header = () => {
  const showUser = useSelector(state => state.config.showUser)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  function handleSignOut() {    
     signOut(auth)
       .then(() => {
       })
       .catch((error) => {
         // An error happened.
       });
  }
  const language = useSelector(state => state.config.lang);

  function handleLangChange(e) {
    dispatch(changeLanguage(e.target.value));

  }

  const showGptSearchView = useSelector((state) => state.gtp.showGptSearch);
 
  return (
    <div
      className={`${
        showGptSearchView ? "relative" : "absolute"
      } w-full z-10 flex justify-between items-center `}
    >
      <div className="lg:px-5 pl-2 py-1  ">
        <img
          className="lg:w-[13.5rem] sm:w-[8rem] md:w-[10rem] w-[6rem] shadow-[rgba(72, 135, 202, 0.8) 0 0 90px 33px]"
          src={Logo}
          alt="netflixLogo"
        />
      </div>

      {user && (
        <div className="flex lg:gap-10 gap-3 items-center px-5">
          <button
            onClick={() => dispatch(toggleGptSearchView())}
            className="lg:px-4 px-2 py-1 lg:py-2 lg:text-lg text-sm bg-purple-700 text-white rounded-md"
          >
            {showGptSearchView ? "Home" : "GPT Search"}
          </button>
          {showUser && <UserInfo />}
          {showGptSearchView && (
            <select
              onChange={handleLangChange}
              className="lg:px-4 px-1 py-1 lg:py-2 lg:text-lg text-sm rounded-md   bg-gray-900 text-white"
            >
              {supportedLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {" "}
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          )}
          <div
            className="lg:w-[3rem] w-7 h-7  lg:h-[3rem]  rounded-lg overflow-hidden"
            onClick={() => dispatch(setShowUser())}
          >
            <img
              src={userpic}
              className="bg-red-700 h-full w-full aspect-square "
              alt="userIcon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header
