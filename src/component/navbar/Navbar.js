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
                <div className="user">
                    <button className="nav-login ">
                    <Link to="#">Login</Link>
                    <FontAwesomeIcon classsName="i" icon={faUser} />
                    </button> 
                    <ul className="login-sub-menu sub-menu">
                        <li><Link to="/Login">Student</Link></li>
                        <li><Link to="#">Officers</Link></li>
                        <li><Link to="#">Admin</Link></li>
                    </ul>   
                </div>
            </div>
        </div>
    );
}

export default Navbar;