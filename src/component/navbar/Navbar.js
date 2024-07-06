import React from 'react';
import './navstyle.css';
import { Link } from 'react-router-dom';
//import font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Login from '../login/loginscript';

const Navbar=()=>{
    return (
        <div className="nav-bar">
            <div className="nav-left">
            
                <img className="nav-logo border" src={process.env.PUBLIC_URL + 'logo.jpg'} />
                <h1> Shaheed Ziaur Rahman Hall</h1>
            </div>
            <div className="nav-right">
                <Link className="nav-home" to="/home">Home</Link>
                <div className="user user1">
                    <button className="nav-login ">
                    <Link to="#">Login</Link>
                    <FontAwesomeIcon classsName="i" icon={faUser} />
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/login">Student</Link></li>
                        <li><Link to="/login">Officers</Link></li>
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
        </div>
    );
}

export default Navbar;