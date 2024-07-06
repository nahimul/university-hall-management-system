import React from 'react';
import './navstyle.css';
import { Link } from 'react-router-dom';


const Navbaruser=()=>{
    return (
        <div className="nav-bar">
            <div className="nav-left">
            
                <img className="nav-logo border" src={process.env.PUBLIC_URL + 'logo.jpg'} />
                <h1> Shaheed Ziaur Rahman Hall</h1>
            </div>
            <div className="nav-right">
               
                <div className="user">
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
        </div>
    );
}

export default Navbaruser;