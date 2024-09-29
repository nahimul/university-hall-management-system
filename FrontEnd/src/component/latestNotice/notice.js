import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import './noticestyle.css';
import axios from 'axios';
import fileDownload from 'js-file-download';

const Notice = () => {

   const [notices, setNotices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/notices/get')
            .then((res) => {
                console.log(res.data.data);
                setNotices(res.data.data);
                console.log(notices);
            })
            .catch((error) => {
                console.log(error);
           })
    }, []);

  const downloadFile = (url) => {
    //const url=`localhost:3000/${URL}`;
    axios.get(url, {
        responseType: 'blob',
    }).then((res) => {
        fileDownload(res.data, url);
    });

 }

 //preview file
  const handleView = (notice) => {
      //window.open(url);
      const newWindow = window.open('', '_blank', 'width=600,height=400');
      newWindow.document.write(`
        <html>
          <head>
            <title>${notice.title}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h3 { margin-top: 0; }
              p { margin: 5px 0; }
              .button { margin-top: 20px; }
            </style>
          </head>
          <body>
            <h3>${notice.title}</h3>
            <p>${notice.description}</p>
            <p>Date: ${notice.date}</p>
            <p>Time: ${notice.time}</p>
            <button class="button" onclick="window.close()">Close</button>
          </body>
        </html>
      `);
  }

  return (
    <div className="notice-container">
      <h2>Latest Notices</h2>
      {notices.slice().reverse().map((notice) => (
        <div className="notice notice1 trans">
        <div className="date">
          <p className="date-mn">{notice.date}</p>
          <p className="time">{notice.time}</p>
        </div>
        <div className="title-eye-dwn">
          <div className="title">
            <p>{notice.title}</p>
          </div>
          <div className="eye-dwn">
            <button className="view" href="#" onClick={()=>handleView(notice)}>
              <FontAwesomeIcon className="i" icon={faEye} />
            </button>
            <button className="download" href="#" onClick={()=>downloadFile(notice.upFile)}>
              <FontAwesomeIcon className="i" icon={faDownload} />
            </button>
          </div>
        </div>
      </div>
      ))  
      }
    </div>
  );
};
export default Notice;
