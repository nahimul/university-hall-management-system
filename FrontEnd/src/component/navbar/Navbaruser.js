import React from 'react';
import './navstyle.css';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbaruser=()=>{

    const [user, setUser]= useState({});
    const [token, setToken]=useState(Cookies.get('accessToken'));

    useEffect( () => {    
      axios.get('http://localhost:8080/api/v1/students/user'
        ,{
          withCredentials:true,
        }
      )
    .then((res)=>{    
        setUser(res.data.data);
    } )
    .catch((error)=>{
        console.log(error);
      }
    )
    },[]);
 
    const handleLogout = () => {
        
            axios.post('http://localhost:8080/api/v1/students/logout',
                {}
              ,{
                withCredentials:true,
              }
            )
          .then((res)=>{    
                toast("Logout Successfull");
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
          } )
          .catch((error)=>{
              console.log(error);
            }
          )
    };

    useEffect(()=>{
        setToken(Cookies.get('accessToken')); 
    },[Cookies.get('accessToken')]);





const Navbaruser=()=>{
    return (
        <div className="nav-bar">
            <div className="nav-left">
            
                <img className="nav-logo border" src={process.env.PUBLIC_URL + 'logo.jpg'} />
                <h1> Shaheed Ziaur Rahman Hall</h1>
            </div>
            {token ?
             <div className="nav-right">
                <div>

                <Link className="nav-home" to="/home">Home</Link>
                </div>
                <div className="user">
                    <button className="nav-login ">
                    <img className="logo-img" src={process.env.PUBLIC_URL + 'images.png'}/>
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/" onClick={()=> toast('Logout Successfully!')}>Logout</Link></li>
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Settings</Link></li>
                    </ul>   
                </div>
            </div>
            :
            <>
            <div className="nav-right">
                <div>
                <Link className="nav-home" to="/home">Home</Link>
                </div>
                <div className="user user1">
                    <button className="nav-login ">
                    <Link to="#">Login</Link>
                    <FontAwesomeIcon classsName="i" icon={faUser} />
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/login">Student</Link></li>
                        <li><Link to="/officerslogin">Officers</Link></li>
                        <li><Link to="/login">Admin</Link></li>
                    </ul>   
                </div>

                <div className="user user2">
                    <button className="nav-login ">
                    <img className="logo-img" src={process.env.PUBLIC_URL + 'images.png'}/>
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/">Logout</Link></li>
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Settings</Link></li>
                    </ul>   
                </div>
            </div>
            </>

            }
        </div>
    );
}
}

export default Navbaruser;