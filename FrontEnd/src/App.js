import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Events from "./component/events/Events";
import Home from "./component/home/home";
import Navbar from "./component/navbar/Navbar";
import Navbaruser from './component/navbar/Navbaruser'; 
import Login from "./component/login/loginscript";
import Registration from "./component/registration/registerscript";
import User from "./component/personal-info/personalinfoscript";
import Forget from "./component/registration/Forget";
import AllotmentForm from "./component/allotmentform/allotmentform";
import ComplainBox from "./component/complain/complainbox";
import OfficersLogin from "./component/officers/login/login"
import OfficersRegistration from "./component/officers/registration/register"
import Manager from "./component/officers/manager/manager"
import Register from "./component/officers/register/register"
import Supervisor from './component/officers/supervisor/supervisor';

function App() {
 const [token,setToken]=useState();

 useEffect(()=>{
  const tok=Cookies.get('accessToken');
  setToken(tok);
 },[]);

  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Home/></>,
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
      element:<>{<Navbar/> && <Login/>}</>
    },
    {
      path:"/registration",
      element:<><Navbar/><Registration/></>
    }
    ,
    {
      path:"/user",
      element:<><Navbar/><User/></>
    },
    {
      path:"/forgot",
      element:<><Navbar/><Forget/></>
    },{
      path:"/allotmentform",
      element:<><Navbar/><AllotmentForm /></>
    },{
      path:"/complainbox",
      element:<><Navbar/><ComplainBox/></>
    },{
      path:"/officerslogin",
      element:<><Navbar/><OfficersLogin/></>
    },{
      path:"/officersregistration",
      element:<><Navbar/><OfficersRegistration/></>
    },{
      path:"/manager",
      element:<><Navbar/><Manager/></>
    },{
      path:"/register",
      element:<><Navbar/><Register/></>
    },{
      path:"/supervisor",
      element:<><Navbar/><Supervisor/></>
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
