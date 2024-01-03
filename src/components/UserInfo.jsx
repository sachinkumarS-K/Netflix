import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { setGptFalse, toggleGptSearchView } from '../redux/gptSlice';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { setUserFalse } from '../redux/configSlice';

const UserInfo = () => {
     const showGptSearchView = useSelector((state) => state.gtp.showGptSearch);
     const dispatch = useDispatch();
    
     const user = useSelector(s => s.user);
     console.log(user);
     function handleSignOut() {
       dispatch(setGptFalse());
       dispatch(setUserFalse())
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            // An error happened.
          });
      }
  return (
    <div className="absolute lg:top-[5rem] top-[3rem] right-2">
      {/* <IoMdArrowDropdownCircle className="text-4xl w-full  lg:pl-12 ml-10 lg:ml-5 -mt-4 text-gray-300  lg:text-white" /> */}
      <div
        className="float-end -mt-[4px] pr-1 mr-3"
        style={{
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "20px solid #d1d5db",
        }}
      ></div>

      <div className="bg-gray-300 w-full rounded-lg lg:px-6 lg:pl-2  lg:py-2 py-1 -mt-3 flex flex-col justify-between gap-1">
        <p className="lg:text-xl text-lg font-normal tracking-wide">
          Hello {user.displayName}{" "}
        </p>

        <div className="w-full bg-black  h-[1px]"></div>
        <p
          onClick={handleSignOut}
          className="lg:text-lg  font-bold tracking-wider cursor-pointer text-red-400"
        >
          Sign Out
        </p>
        {/* <button
         
          className="lg:px-5 px-2 lg:text-lg text-sm py-1 bg-red-400 text-white rounded-md flex-1"
        >
          Sign Out
        </button> */}
      </div>
    </div>
  );
}

export default UserInfo
