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
import Supervisor from './component/officers/supervisor/supervisor'

export const nav=[
    {
        path:"/",
        name:"Home",
        element:<><Navbar user=''/><Home/><Home/></>,
        isMenu:true,
        isPrivate:false
      },
      {
        path:"/home",
        name:"Home",
        element:<><Navbar user=''/><Home/></>,
        isMenu:true,
        isPrivate:false
      },
      {
        path:"/event/:id",
        name:"Event",
        element:<><Navbar user=''/><Events/></>,
        isMenu:true,
        isPrivate:false
      },
      {
        path:"/login",
        name:"Login",
        element:<><Navbar user=''/><Login/></>,
        isMenu:true,
        isPrivate:false
      },
      {
        path:"/registration",
        name:"registration",
        element:<><Navbar user='student'/><Registration/></>,
        isMenu:true,
        isPrivate:false
      }
      ,
      {
        path:"/profile",
        name:"Profile",
        element:<><Navbar user='student'/><User/></>,
        isMenu:true,
        isPrivate:true
      },
      {
        path:"/forgot",
        name:"Forgot",
        element:<><Navbar user='student'/><Forget/></>,
        isMenu:true,
        isPrivate:false
      },{
        path:"/allotmentform",
        name:"AllotmentForm",
        element:<><Navbar user='student'/><AllotmentForm /></>,
        isMenu:true,
        isPrivate:true
      },{
        path:"/complainbox",
        name:"Complain",
        element:<><Navbar user='student'/><ComplainBox/></>,
        isMenu:true,
        isPrivate:true
      },{
        path:"/officerslogin",
        name:"Officer login",
        element:<><Navbar/><OfficersLogin/></>,
        isMenu:true,
        isPrivate:false
      },{
        path:"/officersregistration",
        name:"OfficerRegistration",
        element:<><Navbar user='officer'/><OfficersRegistration/></>,
        isMenu:true,
        isPrivate:false
      },{
        path:"/manager",
        name:"Manager",
        element:<><Navbar user='officer'/><Manager/></>,
        isMenu:true,
        isPrivate:true
      },{
        path:"/register",
        name:"Register",
        element:<><Navbar user='officer'/><Register/></>,
        isMenu:true,
        isPrivate:true
      },{
        path:"/supervisor",
        name:"Supervisor",
        element:<><Navbar user='officer'/><Supervisor/></>,
        isMenu:true,
        isPrivate:true
      }
]

