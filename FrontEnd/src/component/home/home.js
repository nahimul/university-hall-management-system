import React, { useEffect } from 'react';
import { useState } from 'react';
import NoticeBoard from '../latestNotice/notice';
import EventContainer from '../events/eventcontainer';
import { Link } from 'react-router-dom';
import Contact from '../contactus/contact';
import './home.css';

const Home = () => {
  const [page, setPage] = useState(true);
<<<<<<< HEAD
  const [residence, setResidence] = useState(false);
=======
  const [residence, setResidence] = useState(true);
>>>>>>> parent of a9d7b20 (Add Authenication and authorization of an user)
  // const handlePage=(e)=>{
  //     setPage(e.target.value)
  // };
  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token) {
      setResidence(true);
    }
  }, []);

  const optionOff = {
    color: '#878e99',
    textDecoration: 'none',
  };
  const optionOn = {
    color: '#081c3b',
    textDecoration: 'underline',
  };
  const allotment = (
    <>
      <Link to="/AllotmentForm">
        <button className="allotment-bnt" type="submit">
          Apply for allotment
        </button>
      </Link>
    </>
  );
  const complain = (
    <>
      <Link to="/ComplainBox">
        <button className="complain-bnt" type="submit">
          Add Complain
        </button>
      </Link>
    </>
  );

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
            Recent Event
          </button>
          <button
            type="submit"
            className="notice-bnt"
            onClick={() => {
              setPage(false);
            }}
            style={page ? optionOff : optionOn}
          >
            Latest Notice
          </button>
        </div>
        <div className="allote-complain">
<<<<<<< HEAD
          {residence && allotment}
          {residence && complain }
=======
          {residence ? complain : allotment}
>>>>>>> parent of a9d7b20 (Add Authenication and authorization of an user)
        </div>
      </div>
      <div className="home-container">
        {/* ternary oparatior */}
        {page ? <EventContainer /> : <NoticeBoard />}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
