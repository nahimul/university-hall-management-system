import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './allotmentform.css';

const AllotmentForm = () => {
  const styles = theme => ({
    textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: 'white',
    },
  });

  return (
    <div className="allotmentform">
      <Link to="/Home">
        <button className="back" type="'submit">
          <FontAwesomeIcon
            className="i"
            icon={faArrowLeft}
            aria-hidden="true"
          />
          Go Back
        </button>
      </Link>
      <h1>Apply for allotment</h1>
        <h3>Allotment wanted date</h3>
      <div className="date">
        <input
          type="text"
          id="in"
          placeholder="write diser date "
        />
      </div>
        <h3>Why you want allotment?</h3>
      <div className="application">
        <textarea type="text" 
        id="application" placeholder="write your application."/>
      </div> 
      <div className="action">
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </div>
    </div>
  );
};

export default AllotmentForm;
