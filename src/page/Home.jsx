import React, { useEffect } from 'react'
import Header from '../components/Header'
import Login from '../components/login'

 import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const Home = () => {
 

  return (
       <div className= 'min-h-screen'>
        <Login />
    </div>
  )
}

export default Home
