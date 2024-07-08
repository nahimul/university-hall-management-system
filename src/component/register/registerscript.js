import React from 'react';
import '../login/loginstyle.css';
import { Link } from 'react-router-dom';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faEye,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors,setFormErrors]=useState({});

  const handleChlickShowPassword = () => {
    setFormInput({ ...formInput, showPassword: !formInput.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = e => {
    const {name, value} = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formInput));
  }

  const changeBorder = {
    border: '1px solid red',
    borderRadius: '5px'
  };

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
          <>
            <div className="input-box">
              <label for="email">Email</label>
              <input
                type="text"
                placeholder="Write email "
                id="email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
                style={formErrors.email && changeBorder}
              />
            </div>
            {formErrors.email && <p id="error">{formErrors.email}</p>}
          </>
          <div className="pass">
            <label for="password">Password</label>
            <TextField
              type={formInput.showPassword ? 'text' : 'password'}
              placeholder="Type password"
              id="password"
              name="password"
              value={formInput.password}
              onChange={handleChange}
              style={formErrors.password && changeBorder}
              InputProps={{ style: { width: '100%' },
                endAdornment: (
                  <InputAdornment position="end">
                  <IconButton
                    onClick={handleChlickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {formInput.showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              )
              }}
            />
          </div>
          {<p id="error">{formErrors.password}</p>}
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
