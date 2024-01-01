import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import { Provider, useDispatch } from "react-redux"
import store from "./redux/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/userSlice";
function App() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
  useEffect(() => {
     //console.log(auth)
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
     //console.log(user);
     //console.log(unSubscribe)
       if (user) {
         const { uid, displayName, email } = user;
         dispatch(addUser({ uid, displayName, email }));
         navigate("/browse");
       } else {
         dispatch(removeUser());
         navigate("/")
       }
   });
    
    return () =>  unSubscribe()
   }, []);
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default App
