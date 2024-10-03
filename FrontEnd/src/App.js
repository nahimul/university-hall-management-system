import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Events from "./component/events/Events";
import Home from "./component/home/home";
import Navbar from "./component/navbar/Navbar";
// import Navbaruser from './component/navbar/Navbaruser'; 
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
import Action from './component/officers/manager/action'
import Cookies from 'js-cookie';
import { useState , useEffect} from 'react';

function App() {
  const [token, setToken]=useState(Cookies.get('accessToken'));

  useEffect( () => {
    const token = Cookies.get('accessToken');
    if (token) {
      setToken(token);
    }
  }, []);

  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar user=''/><Home/></>,
    },
    {
      path:"/home",
      element:<><Navbar user=''/><Home/></>
    },
    {
      path:"/event/:id",
      element:<><Navbar user=''/><Events/></>
    },
    {
      path:"/login",
      element:<><Navbar user=''/><Login/></>
    },
    {
      path:"/registration",
      element:<><Navbar user='student'/><Registration/></>
    }
    ,
    {
      path:"/user",
      element:<><Navbar user='student'/><User/></>
    },
    {
      path:"/forgot",
      element:<><Navbar user='student'/><Forget/></>
    },{
      path:"/allotmentform",
      element:<><Navbar user='student'/><AllotmentForm /></>
    },{
      path:"/complainbox",
      element:<><Navbar user='student'/><ComplainBox/></>
    },{
      path:"/officerslogin",
      element:<><Navbar/><OfficersLogin/></>
    },{
      path:"/officersregistration",
      element:<><Navbar user='officer'/><OfficersRegistration/></>
    },{
      path:"/manager",
      element:<><Navbar user='officer'/><Manager/></>
    },{
      path:"/register",
      element:<><Navbar user='officer'/><Register/></>
    },{
      path:"/supervisor",
      element:<><Navbar user='officer'/><Supervisor/></>
    },{
      path:"/action/:id",
      element:<><Navbar user='officer'/><Action/></>
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
