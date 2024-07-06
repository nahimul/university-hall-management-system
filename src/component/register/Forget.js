import React from 'react';
import '../login/loginstyle.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faEye,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const intialValue = { email: '', password: '' };
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors,setFormErrors]=useState({});


  const handleChange = e => {
    const {name, value} = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formInput));
  }

  const validate=(formInput)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!formInput.email){
        errors.email="Email is Required!";
    }
    else if(!regex.test(formInput.email)){
        errors.email="This is not a valid email format!";
    }

    if(!formInput.password){
        errors.password="Password is required!";
    }
    else if(formInput.password.length<6){
        errors.password="Password must be more than 6 characters!";
    }
    else if(formInput.password.length>10){
        errors.password="Password cannot exceed more than 10 characters!";
    }

    return errors;
  }

  return (
    <div className="login-page">
      {/* <pre>{JSON.stringify(formInput, undefined, 2)}</pre> */}
      <div className="login-header ">
        <h1>Register your account</h1>
      </div>
      <div className="form ">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Write email "
              id="email"
              name="email"
              value={formInput.email}
              onChange={handleChange}
            />
          </div>
          <p id="error">{formErrors.email}</p>
          <div className="input-box">
            <label for="password">New Password</label>
            <input
              type="password"
              placeholder="Type password"
              id="password"
              name="password"
              value={formInput.password}
              onChange={handleChange}
            />
            <span className="password-toggle-icon">
              <FontAwesomeIcon className="i" icon={faEye}/>
            </span>
          </div>
          <p id="error">{formErrors.password}</p>
          <div className="input-box">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              placeholder="Type password"
              id="confirm-password"
              name="password"
              value={formInput.password}
              onChange={handleChange}
            />
            <span className="password-toggle-icon">
              <FontAwesomeIcon className="i" icon={faEye}/>
            </span>
          </div>
          <p id="error">{formErrors.password}</p>
          <div className="forgot">
            <label>
            <FontAwesomeIcon class="i" icon={faCircleInfo}/> Try to use strong password with number and characters.
            </label>
          </div>
          <div className="btn">
            <button type="submit" id="loginbtn">
              <FontAwesomeIcon className="i" icon={faSignIn}/> Reigster
            </button>
          </div>
        </form>
      </div>
      <div className="register">
        <p>
          Don you already have an account?
          <Link to="/login"> Login! </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
