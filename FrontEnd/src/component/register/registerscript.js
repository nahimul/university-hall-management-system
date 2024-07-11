import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState, useEffect } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './register.css';
import axios from 'axios';

const Register = () => {
  const intialValue = {
    name: '',
    department: '',
    session: '',
    roll: '',
    registration: '',
    mobile: '',
    email: '',
    password: '',
    showPassword: false,
  };
  const navigate=useNavigate();
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted,setIsSubmitted]=useState(false)

  const handleChlickShowPassword = () => {
    setFormInput({ ...formInput, showPassword: !formInput.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formInput));
    setIsSubmitted(true);
    if(Object.keys(formErrors).length===0 && isSubmitted){
      axios.post('http://localhost:3001/register',formInput)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
      navigate('/login');
    }
  };

  const changeBorder = {
    border: '1px solid red',
    borderRadius: '5px',
  };

  const validate = formInput => {
    const errors = {};
    let regex =/^(?:\+88|88)?(01[3-9]\d{8})$/i;
    if (!formInput.name) {
      errors.name = 'Name is Required!';
    }
    if (!formInput.department) {
      errors.department = 'Department is Required!';
    }
    if (!formInput.session) {
      errors.session = 'session is Required!';
    }
    if (!formInput.roll) {
      errors.roll = 'Roll is Required!';
    }
    if (!formInput.mobile) {
      errors.mobile = 'Mobile is Required!';
      //checking mobile number validation
    }
    else if(!regex.test(formInput.mobile)){
      errors.mobile = 'This is not a valid number!';
    }
    regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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

    return errors;
  };

  return (
    <div className="register-page">
      {/* <pre>{JSON.stringify(formInput, undefined, 2)}</pre> */}
      <div className="login-header ">
        <h1>Register your account</h1>
      </div>
      <div className="form ">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Your name"
            id="in"
            name="name"
            value={formInput.name}
            onChange={handleChange}
          />
          {formErrors.name && <p id="error">{formErrors.name}</p>}
          <TextField
            type="text"
            label="Department name"
            placeholder='eg- Information and Communication Engineering'
            id="in"
            name="department"
            value={formInput.department}
            onChange={handleChange}
          />
          {formErrors.department && <p id="error">{formErrors.department}</p>}
          <TextField
            type="text"
            label="session"
            placeholder='eg- 2018-19'
            id="in"
            name="session"
            value={formInput.session}
            onChange={handleChange}
          />
          {formErrors.session && <p id="error">{formErrors.session}</p>}
          <TextField
            type="text"
            label="Roll number"
            id="in"
            name="roll"
            value={formInput.roll}
            onChange={handleChange}
          />
          {formErrors.roll && <p id="error">{formErrors.roll}</p>}
          <TextField
            type="text"
            label="Registration number"
            id="in"
            name="registration"
            value={formInput.registration}
            onChange={handleChange}
          />
          <TextField
            type="text"
            label="Mobile number"
            placeholder='01*********'
            id="in"
            name="mobile"
            value={formInput.mobile}
            onChange={handleChange}
          />
          {formErrors.mobile && <p id="error">{formErrors.mobile}</p>}
          <TextField
            type="text"
            label="Write email "
            id="in"
            name="email"
            value={formInput.email}
            onChange={handleChange}
          />
          {formErrors.email && <p id="error">{formErrors.email}</p>}

          <div className="pass">
            <TextField
              type={formInput.showPassword ? 'text' : 'password'}
              placeholder="Type password"
              id="password"
              label="Type password"
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
                      {formInput.showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {<p id="error">{formErrors.password}</p>}
          <div className="forgot">
             <InfoOutlinedIcon className="i"/>
            <p>
            Try to use strong password with number and characters.
            </p>
          </div>
          <div className="btn">
            <button type="submit" id="loginbtn">
             Submit
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
