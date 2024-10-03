// ApplicationAction.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './actionCSS.css';

const ApplicationAction = () => {
  const { id } = useParams();
  const [application, setApplication] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/officers/request/${id}`)
      .then(res => {
        setApplication(res.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAction = async (action) => {
    setLoading(true);
    setError(null);
  };

  if (!application.result) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="application-action">
        <div className="person-details">
          <Link to="/manager">
            <button className="back" type="submit">
              <FontAwesomeIcon
                aria-hidden="true"
                className="i"
                icon={faArrowLeft}
              />{' '}
              Go Back
            </button>
          </Link>
          <h2 className="info-container">Student Information</h2>
          <div className="details">
            <div className="person-image">
              <img alt="Event" src={application.student.avatar} />
            </div>
            <div className="person-info">
              <div className="name">
                <h1 className="name">{application.student.name}</h1>
              </div>
              <div>
                <table className="details-table">
                  <tbody>
                    <tr>
                      <td>Student ID</td>
                      <td>: {application.student.roll}</td>
                    </tr>
                    <tr>
                      <td>Registration No</td>
                      <td>: {application.student.registration}</td>
                    </tr>
                    <tr>
                      <td>Student Type</td>
                      <td
                        id={
                          application.student.resident
                            ? application.student.resident.toLowerCase()
                            : ''
                        }
                      >
                        : {application.student.resident}
                      </td>
                    </tr>
                    <tr>
                      <td>Department</td>
                      <td>: {application.student.department}</td>
                    </tr>
                    <tr>
                      <td>Program</td>
                      <td>: UNDERGRADUATE</td>
                    </tr>
                    <tr>
                      <td>Session</td>
                      <td>: {application.student.session}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>: {application.student.mobile}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h2>Application Details</h2>
        <div className="application-details">
                <table className="details-table">
                  <tbody>
                    <tr>
                      <td>Result</td>
                      <td>: {application.result}</td>
                    </tr>
                    <tr>
                      <td>Emergency Contact Person</td>
                      <td>: {application.emergencyPerson}</td>
                    </tr>
                    
                    <tr>
                      <td>Emergency Contact</td>
                      <td>: {application.emergencyContact}</td>
                    </tr>
                    <tr>
                      <td>Details</td>
                      <td>: {application.details}</td>
                    </tr>
                    <tr>
                      <td>Expected Date</td>
                      <td>: {application.expectedDate}</td>
                    </tr>
                  </tbody>
                </table>
          <h3>
            <strong>Document:</strong>{' '}
            <a
              href={application.docs}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Document
            </a>
          </h3>
        </div>

        <h1>Take Action</h1>

        <div>
          <button
            className='approve'
            onClick={() => handleAction('approve')}
            disabled={status === 'approve'}
          >
            Approve
          </button>
          <button
            className='reject'
            onClick={() => handleAction('reject')}
            disabled={status === 'reject'}
          >
            Reject
          </button>
        </div>
      </div>
    );
  }
};

export default ApplicationAction;
