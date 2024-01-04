import { Outlet, useNavigate } from "react-router-dom"
import { Provider, useDispatch } from "react-redux"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./redux/slices/userSlice";
import Header from "./components/header/Header";
function App() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
  useEffect(() => {
     //console.log(auth)
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
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
