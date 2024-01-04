import React, { useState } from 'react'
import validate from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import Spinner from './Loader/Spinner';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isSignIn, setIsSignIn] = useState(true);
  const [eyeOpen , setEyeOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [formData , setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState(null);
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData(pre => {
      return {
        ...pre,
        [name]: value,
      };
    });
    // console.log(formData)
  }

  async function signUpUser() {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(res);
      const updatedDetails = await updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      const { uid, email, displayName } = auth.currentUser;
      dispatch(addUser({ uid, email, displayName }));
      
      navigate("/browse");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function signInUser() {
    setIsLoading(true)
    try {
      const userDetails = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userDetails.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      setErrorMsg(errorMessage);
    }
    setIsLoading(false)
  }
  
  function submitHandler(e) {
    
    e.preventDefault();
    const type = isSignIn ? "signin" : "signup"
    const res = validate(formData.email , formData.password , formData.name , type);
    setErrorMsg(res);
    if (res) return    
    
    if (type == "signup") {
      signUpUser();
    }
    else {
      signInUser();
    }
    setFormData({ name: "", email: "", password: "" });
  }
     return (
    
         <div className=" min-h-screen w-full h-full bg-cover  bg-no-repeat flex justify-center items-center bg-origin-content bg-slate-950 md:bgUrl lg:bgUrl">
           {isLoading ? (
             <Spinner />
           ) : (
             <div className="lg:w-[30%] md:w-[50%] sm:w-8/12 w-11/12 py-10 pb-16 md:px-10 lg:px-5 bg-[rgba(0,0,0,.75)] rounded-lg">
               <form
                 onSubmit={submitHandler}
                 className=" flex flex-col transition-all duration-500 ease-in-out hover:outline-lime-50 gap-5 justify-center md:px-8 px-3  lg:px-8 py-5 opacity-100"
               >
                 <h1 className="text-white mb-3 text-3xl px-4 font-bold">
                   {isSignIn ? " SIGN IN" : " SIGN UP"}
                 </h1>
                 <input
                   type={isSignIn ? "hidden" : "text"}
                   className="bg-[#333] py-3 rounded-lg placeholder:text-lg  w-full indent-5 border-none outline-none lg:text-xl text-white placeholder:indent-6 "
                   placeholder="Enter Your Full Name"
                   value={formData.name}
                   name="name"
                   onChange={onChangeHandler}
                 />
                 <input
                   type="text"
                   className="bg-[#333] py-3 rounded-lg placeholder:text-lg transition-all duration-500 ease-in-out hover:outline-lime-50  w-full indent-5 border-none outline-none lg:text-xl text-lg text-white placeholder:indent-6 "
                   placeholder="Email or phone Number"
                   value={formData.email}
                   name="email"
                   onChange={onChangeHandler}
                 />
                 <div className="flex relative">
                   <input
                     className="bg-[#333] py-3 rounded-lg w-full transition-all duration-500 ease-in-out hover:outline-lime-50 indent-5 border-none outline-none lg:text-xl text-white text-lg lg:placeholder:indent-6 placeholder:text-lg "
                     type={eyeOpen ? "text" : "password"}
                     placeholder="Password"
                     value={formData.password}
                     name="password"
                     autoComplete="on"
                     onChange={onChangeHandler}
                   />
                   {eyeOpen ? (
                     <FaRegEyeSlash
                       onClick={() => setEyeOpen(!eyeOpen)}
                       className="z-10 text-2xl text-gray-400 absolute right-4 top-1/3"
                     />
                   ) : (
                     <FaRegEye
                       onClick={() => setEyeOpen(!eyeOpen)}
                       className="z-10 text-2xl text-slate-500 absolute right-4 top-1/3"
                     />
                   )}
                 </div>
                 {errorMsg && (
                   <p className="text-red-600 px-4 font-semibold text-lg tracking-wider">
                     {errorMsg}
                   </p>
                 )}
                 <button className="bg-red-700 mt-5 text-xl font-bold text-white px-10 py-3 rounded-xl">
                   {isSignIn ? " Sign In" : " Sign Up"}
                 </button>
               </form>
               <div className="text-white flex items-center justify-start gap-3 text-lg px-8 mt-4 py-3">
                 <p className="opacity-50">
                   {isSignIn ? " New to Netflix?." : " Already a User?."}
                 </p>
                 <p
                   onClick={() => {
                     setIsSignIn(!isSignIn);
                     setErrorMsg(null);
                   }}
                   className="cursor-pointer "
                 >
                   {isSignIn ? " Sign up now." : " Sign in now."}
                 </p>
               </div>
             </div>
           )}
    
       </div>
     );
};

export default Login
