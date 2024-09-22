import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment,TextField } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './forgotstyle.css';

const Register = () => {
  const intialValue = { email: '', password: '', confirmPassword: '' };
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChlickShowPassword = e => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChlickShowConfirmPassword = e => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleMouseDownConfirmPassword = event => {
    event.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formInput));
    
  };

  const validate = formInput => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formInput.email) {
      errors.email = 'Email is Required!';
    } else if (!regex.test(formInput.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!formInput.password) {
      errors.password = 'Password is required!';
    } else if (formInput.password.length < 6) {
      errors.password = 'Password must be more than 6 characters!';
    } else if (formInput.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters!';
    }
    if (formInput.confirmPassword !== formInput.password) {
      errors.confirmPassword = 'Password does not match!';
    }

    return errors;
  };

  return (
    <div className="login-page">
      {/* <pre>{JSON.stringify(formInput, undefined, 2)}</pre> */}
      <div className="login-header ">
        <h1>Set New Password </h1>
      </div>
      <div className="form ">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Write email "
            id="in"
            name="email"
            value={formInput.email}
            onChange={handleChange}
          />
        {<p id="error">{formErrors.email}</p>}
          
          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Type New password"
            id="in"
            name="password"
            value={formInput.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleChlickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
         { <p id="error">{formErrors.password}</p>}
          <TextField
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm password"
            id="in"
            name="confirmPassword"
            value={formInput.confirmPassword}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleChlickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        {<p id="error">{formErrors.confirmPassword}</p>}
          <div className="forgot">
            <InfoOutlinedIcon className="i"/>
            <p>
            Try to use strong password with number and characters.
            </p>
          </div>
          <div className="btn">
            <button type="submit" id="loginbtn">
                Reset Password
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
