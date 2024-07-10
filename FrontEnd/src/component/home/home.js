import React from 'react';
import {useState} from 'react';
import './home.css';
import NoticeBoard from '../latestNotice/notice';
import EventContainer from '../events/eventcontainer';

const Home = () => {
    const [page,setPage] =useState(true);

    // const handlePage=(e)=>{
    //     setPage(e.target.value)
    // };
    const optionOff={
        color: "#878e99",
        textDecoration: "none"
       }
    const optionOn={
        color: "#081c3b",
        textDecoration: "underline"
    }

    return (
      <div>
      <div className="option">
        <button type="submit" className="recent-event-bnt" onClick={()=>{setPage(true)}} style={page ? optionOn: optionOff}>Recent Event</button>
        <button type="submit" className="notice-bnt"
         onClick={()=>{setPage(false)}} style={page ? optionOff: optionOn}>Latest Notice</button>
      </div>
        {/* ternary oparatior */}
        { page ? <EventContainer/>:<NoticeBoard/>}
      </div>
    );
  };

export default Home;