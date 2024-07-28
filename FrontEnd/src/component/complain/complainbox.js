import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../allotmentform/allotmentform';

const ComplainBox = () => {
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
      <h1>Complain Box</h1>
      <form>
        <h3>Subject of the Complain</h3>
        <div className="date">
          <input
            type="text"
            id="in"
            placeholder="Write the type of the complain."
          />
        </div>
        <h3>What is your complain?</h3>
        <div className="application">
          <textarea
            type="text"
            id="application"
            placeholder="Write your complain."
          />
        </div>
        <div className="action">
          <button type="submit" id="submit">Submit</button>
          <button type="reset" id='cancel'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ComplainBox;
