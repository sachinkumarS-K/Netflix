import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { setGptFalse, toggleGptSearchView } from '../redux/slices/gptSlice';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { setUserFalse } from '../redux/slices/configSlice';

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
        className="float-end -mt-[8px] lg:-mt-[5px] pr-1 mr-2 lg:mr-3"
        style={{
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "20px solid #d1d5db",
        }}
      ></div>

      <div className="bg-gray-300 w-full justify-center items-center rounded-lg lg:px-6 lg:pl-2  lg:py-2 py-1 -mt-3 flex flex-col  gap-1">
        <p className="lg:text-xl text-sm font-normal tracking-wide">
          Hello ! {user.displayName}{" "}
        </p>

        <div className="w-[93%] px-5  bg-cyan-600 h-[1.3px]"></div>
        <p
          onClick={handleSignOut}
          className="lg:text-lg  font-bold tracking-wider cursor-pointer text-red-400"
        >
          Sign Out
        </p>
      </div>
    </div>
  );
}

export default UserInfo
