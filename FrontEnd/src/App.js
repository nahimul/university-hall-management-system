import logo from './logo.svg';
import {createBrowserRouter , RouterProvider ,Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Events from "./component/events/Events";
import Home from "./component/home/home";
import Navbar from "./component/navbar/Navbar";
import Navbaruser from './component/navbar/Navbaruser'; 
import Login from "./component/login/loginscript";
import Register from "./component/register/registerscript";
import User from "./component/personal-info/personalinfoscript";
import Forget from "./component/register/Forget";

function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/event",
      element:<><Navbar/><Events/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/register",
      element:<><Navbar/><Register/></>
    }
    ,
    {
      path:"/user",
      element:<><Navbaruser/><User/></>
    },
    {
      path:"/forgot",
      element:<><Navbaruser/><Forget/></>
    }
  ]
  );
  return (
        <>
        <RouterProvider router={router}/>
        </>
  );
}

export default App;
