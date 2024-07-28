import React from 'react';
import {useState} from 'react';
import ResidentStudent from '../residentStudent/residentStudent';
import AllotedStudent from '../allotedStudent/allotedstudent'
import './employee.css';

const Officers = () => {
 const [isResident,setIsResident]=useState(false);

  return (
    <>
      <div className="office-container">
        <div className="option">
          <button id="resident">Resident Student</button>
          <button id="alloted">Alloted Student</button>
        </div>
        {isResident ? <ResidentStudent/> : <AllotedStudent/>}
      </div>
    </>
  );
};
export default Officers;
