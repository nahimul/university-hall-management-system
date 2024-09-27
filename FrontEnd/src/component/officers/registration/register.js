import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Select,MenuItem,InputLabel } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState} from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './registerstyle.css';
import axios from 'axios';
import { toast } from 'react-toastify';

import Cookies from 'js-cookie';

const Register = () => {
  const intialValue = {
    name: '',
    possition: '',
    id_no: '',
    registration: '',
    mobile: '',
    email: '',
    password: '',
    showPassword: false,
  };
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [image, setImage] = useState(null);

  const handleChlickShowPassword = () => {
    setFormInput({ ...formInput, showPassword: !formInput.showPassword });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setImage(file);
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
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      const formData = new FormData();
      formData.append('name', formInput.name);
      formData.append('possition', formInput.possition);
      formData.append('email', formInput.email);
      formData.append('id_no', formInput.roll);
      formData.append('registration', formInput.registration);
      formData.append('password', formInput.password);
      formData.append('mobile', formInput.mobile);
      formData.append('avatar', image);
      console.log(formData);
      console.log(image);

      axios
        .post('http://localhost:8080/api/v1/officers/registration', formData)
        .then(res => {
          console.log(res);
          Cookies.set('token', res.data.data.accessToken);
          Cookies.set('refreshToken', res.data.data.refreshToken);
          toast('Registration Successfull');
          navigate('/officerslogin');
        })
        .catch(err => console.log(err));
      navigate('/officerslogin');
    }
  };

  // const changeBorder = {
  //   border: '1px solid red',
  //   borderRadius: '5px',
  // };

  const validate = formInput => {
    const errors = {};
    let regex = /^(?:\+88|88)?(01[3-9]\d{8})$/i;
    if (!formInput.name) {
      errors.name = 'Name is Required!';
    }
    if (!formInput.possition) {
      errors.possition = 'Possition name is Required!';
    }
    if (!formInput.id_no) {
      errors.id_no = 'ID number is Required!';
    }
    if (!formInput.mobile) {
      errors.mobile = 'Mobile number is Required!';
      //checking mobile number validation
    } else if (!regex.test(formInput.mobile)) {
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
      <pre>{JSON.stringify(formInput, undefined, 2)}</pre>
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
          <InputLabel id='possition'>Possition:</InputLabel>      
          <Select
             label="Possition"
             labelId="Possition"
            id="in"
            name="possition"
            value={formInput.possition}
            onChange={handleChange}
          >
            <MenuItem value=""> <em>--select one--</em> </MenuItem>
            <MenuItem value="Register">Register</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Supervisor">Supervisor</MenuItem>
          </Select>
          {formErrors.possition && <p id="error">{formErrors.possition}</p>}
          <TextField
            type="text"
            label="ID number"
            id="in"
            name="id_no"
            value={formInput.id_no}
            onChange={handleChange}
          />
          {formErrors.id_no && <p id="error">{formErrors.id_no}</p>}
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
            placeholder="01*********"
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

          <div className="image-upload">
            <label htmlFor="image">Upload your image: </label>
            <input
              type="file"
              id="image"
              name="avatar"
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={handleFileChange}
            />
          </div>

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
            <InfoOutlinedIcon className="i" />
            <p>Try to use strong password with number and characters.</p>
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
          <Link to="/officerslogin"> Login! </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
