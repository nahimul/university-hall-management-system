import React from 'react';
import {useState} from 'react';
import EventContainer from '../events/eventcontainer';
import NoticeBoard from '../latestNotice/notice';
import './home.css';

const Home = () => {
    const [page,setPage] =useState(true);

    // const handlePage=(e)=>{
    //     setPage(e.target.value)
    // };

    return (
      <div>
      <div className="option">
        <button type="submit" className="recent-event-bnt" onClick={()=>{setPage(true)}} >Recent Event</button>
        <button type="submit" className="notice-bnt"
         onClick={()=>{setPage(false)}}>Latest Notice</button>
      </div>
        {/* ternary oparatior */}
        { page ? <EventContainer/>:<NoticeBoard/>}
      </div>
    );
  };

export default Home;