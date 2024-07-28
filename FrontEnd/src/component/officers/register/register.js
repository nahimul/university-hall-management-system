import React from 'react';
import { useState } from 'react';
import AddNotice from './addNotice';
import AddEvent from './addEvent';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [page, setPage] = useState(true);
  const [residence, setResidence] = useState(true);
  // const handlePage=(e)=>{
  //     setPage(e.target.value)
  // };
  const optionOff = {
    color: '#878e99',
    textDecoration: 'none',
  };
  const optionOn = {
    color: '#081c3b',
    textDecoration: 'underline',
  };

  return (
    <div>
      <div className="option">
        <div className="toggle">
          <button
            type="submit"
            className="recent-event-bnt"
            onClick={() => {
              setPage(true);
            }}
            style={page ? optionOn : optionOff}
          >
            Add Event
          </button>
          <button
            type="submit"
            className="notice-bnt"
            onClick={() => {
              setPage(false);
            }}
            style={page ? optionOff : optionOn}
          >
            Add Notice
          </button>
        </div>
      </div>
      <div className="home-container">
        {page ? <AddEvent /> : <AddNotice/>}
      </div>
    </div>
  );
};

export default Register;
