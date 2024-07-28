import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contactus/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import './noticestyle.css';

const Notice = () => {
  const noticeElement = (
    <div className="notice notice1 trans">
      <div className="date">
        <p className="date-mn">01 July 2024</p>
        <p className="time">10:00 AM</p>
      </div>
      <div className="title-eye-dwn">
        <div className="title">
          <p>Calling for applications for new allotments.</p>
        </div>
        <div className="eye-dwn">
          <button className="view" href="#">
            <FontAwesomeIcon className="i" icon={faEye} />
          </button>
          <button className="download" href="#">
            <FontAwesomeIcon className="i" icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="notice-container">
      <h2>Latest Notices</h2>
      {noticeElement}
      {noticeElement}
      {noticeElement}
      {noticeElement}
      {noticeElement}
      {noticeElement}
      {noticeElement}
      {noticeElement}
    </div>
  );
};
export default Notice;
