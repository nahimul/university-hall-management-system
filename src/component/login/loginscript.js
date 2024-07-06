import React from 'react';
import './loginstyle.css';
import { Link,useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faEye } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
//   const history=UseHistory();
  const navigate=useNavigate();
  const intialValue = { email: '', password: '' };
  const [formInput, setFormInput] = useState(intialValue);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmitted,setIsSubmitted]=useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formInput));
    setIsSubmitted(true);
if(Object.keys(formErrors).length ===0 && isSubmitted) { /*history.push("/user");*/ navigate("/user");}

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
        {/* {Object.keys(formErrors).length ===0 && isSubmitted && <Link to="/user"></Link>} */}
      {/* <pre>{JSON.stringify(formInput, undefined, 2)}</pre> */}
      <div className="login-header ">
        <h1>Sign in to your account</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className={formInput.email ? "wrong" :"input-box"}>
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
          {formErrors.email && <p id="error">{formErrors.email}</p>}
          <div className={formInput.pass!==0 ? "wrong" :"input-box"}>
            <label for="password">Password</label>
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
         {formErrors.password && <p id="error">{formErrors.password}</p>}
          <div className="forgot">
            <label>
              <Link href=""> Forgot Password? </Link>
            </label>
          </div>
          <div className="btn">
            <button type="submit" id="loginbtn">
              <FontAwesomeIcon className="i" icon={faSignIn}/> Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="register">
        <p>
          Don't have an account?
          <Link to="/register"> Register! </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
