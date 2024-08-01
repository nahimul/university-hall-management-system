import React from 'react';
import {useState} from 'react';
import AlloteRequest from '../alloteRequest/alloterequest';
import AllotedStudent from '../allotedStudent/allotedstudent'
import './manager.css';

const Manager = () => {

  const [residence, setResidence] = useState(true);

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
      <div className="option-manager">
        <div className="toggle">
          <button
            type="submit"
            className="recent-event-bnt"
            onClick={() => {
              setResidence(true);
            }}
            style={residence ? optionOn : optionOff}
          >
            Alloted Student
          </button>
          <button
            type="submit"
            className="notice-bnt"
            onClick={() => {
              setResidence(false);
            }}
            style={residence ? optionOff : optionOn}
          >
            Allote Request
          </button>
        </div>
      </div>
      <div className="home-container">
        { residence ? <AllotedStudent /> : <AlloteRequest/>}
      </div>
    </div>
  );
};
export default Manager;
