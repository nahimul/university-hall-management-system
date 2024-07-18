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
          />{' '}
          Go Back
        </button>
      </Link>
      <h1>Apply for allotment</h1>
        <h3>Want to allotment form</h3>
      <div className="type">
        <TextField
          type="text"
          id="in"
          name="name"
          placeholder="write diser date "
          // value={formInput.name}
          // onChange={handleChange}
          InputProps={{
            style: { width: '100%' },
          }}
        />
      </div>
        <h3>Want to allotment form</h3>
      <div className="application">
        <TextField
          id="email"
          label="Email"
          className={styles.textField}
          margin="normal"
          InputProps={{
            className: styles.input,
          }}
        />
      </div>
      <div className="action">
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </div>
    </div>
  );
};

export default AllotmentForm;
