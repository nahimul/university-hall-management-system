import React from 'react';
import './supervisor.css';

import {useState} from 'react';
const Supervisor = () => {
 const [reply,setReply]=useState(false);

  const complains = (
    <div className="complains">
      <div className="user-image">
        <img src={process.env.PUBLIC_URL + 'images.png'} />
      </div>
      <div className="user-complain">
        <div className="user-name">
          <h3 className="name">Md. Nahimul Islam</h3>
          <h4 className="department">
            Information and Communication Engineering
          </h4>
        </div>
        <div className="complainbox">
          <p className="text">
            I have an electric line problem. Fixed it immediately! I have an
            electric line problem. Fixed it immediately! ROOM NO:140 C
          </p>
        </div>
        <div>
          <button className="reply-button" onClick={()=>setReply(!reply)}> Reply</button>
          {reply && <input
            className="reply"
            type="text"
            placeholder="Write your action!"
          />}
        </div>
      </div>
    </div>
  );

  return (
    <div className="supervisor">
      <h1>Cpomplains</h1>
      {complains}
      {complains}
      {complains}
      {complains}
    </div>
  );
};
export default Supervisor;
