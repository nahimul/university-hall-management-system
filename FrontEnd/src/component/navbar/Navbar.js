import React,{useState,useEffect} from 'react';
import './navstyle.css';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode'

const Navbar=(props)=>{

    const navigate=useNavigate();
    
    const [user, setUser]= useState({});
    const [token, setToken]=useState(Cookies.get('accessToken'));    
    
    useEffect( () => {   
      //const url = `http://localhost:8080/api/v1/${props.user}/profile`;
      axios.get('http://localhost:8080/api/v1/students/profile'
        ,{
          withCredentials:true,
        }
      )
    .then((res)=>{    
      setUser(res.data.data);
      setToken(Cookies.get('accessToken'));
    } )
    .catch((error)=>{
        console.log(error);
      }
    )
    
  },[]);

// if(token){  
// const decoded = jwtDecode(token);
// console.log(decoded);
// }
 
    const handleLogout = () => {
        
        axios.post('http://localhost:8080/api/v1/students/logout',{}
              ,{
                withCredentials:true,
              }
            )
          .then((res)=>{    
                toast("Logout Successfull");
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
                setToken('');
                navigate('/home');
          } )
          .catch((error)=>{
              console.log(error);
            }
          )
    };


    return (
        <div className="nav-bar">
            <div className="nav-left">
              <Link to="/home">
                <img className="nav-logo border" src={process.env.PUBLIC_URL + 'logo.jpg'} />
              </Link>
                <h1> Shaheed Ziaur Rahman Hall</h1>
            
            </div>
            {token ?
             <div className="nav-right">
                <Link className="nav-home" to="/home">Home</Link>
                <div className="user">
                    <button className="nav-login ">
                    <img className="logo-img" src={user.avatar}/>
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                        <li><Link to="/user">Profile</Link></li>
                        <li><Link to="#">Settings</Link></li>
                    </ul>   
                </div>
            </div>
            :
            <div className="nav-right">
                <Link className="nav-home" to="/home">Home</Link>
                <div className="user user1">
                    <button className="nav-login ">
                      <div className='login-logo'>
                            <Link to="#">Login</Link>
                            <FontAwesomeIcon className="i" icon={faUser} />
                      </div>
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/login">Student</Link></li>
                        <li><Link to="/officerslogin">Officers</Link></li>
                        <li><Link to="/login">Admin</Link></li>
                    </ul>   
                </div>
            </div>
            }
        </div>
    );
}

export default Navbar;