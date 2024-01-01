import React from 'react'
import { Logo, userpic } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
 import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Header = () => {
const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  function handleSignOut() {
     signOut(auth)
       .then(() => {
       })
       .catch((error) => {
         // An error happened.
       });
  }

 
  return (
    <div className="absolute w-full z-10 flex justify-between items-center ">
      <div className="lg:px-5 pl-2 py-1  ">
        <img
          className="lg:w-[13.5rem] w-[6rem] shadow-[rgba(72, 135, 202, 0.8) 0 0 90px 33px]"
          src={Logo}
          alt="netflixLogo"
        />
      </div>

      {user && (
        <div className="flex lg:gap-10 gap-3 items-center px-5">
          <button
            onClick={handleSignOut}
            className="lg:px-4 px-2 py-1 lg:py-2 lg:text-lg text-sm bg-red-400 text-white rounded-md"
          >
            Sign Out
          </button>
          <div className="lg:w-[3rem] w-8 h-8  lg:h-[3rem]  rounded-lg overflow-hidden">
            <img
              src={userpic}
              className="bg-red-600 h-full w-full  "
              alt="userIcon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header
