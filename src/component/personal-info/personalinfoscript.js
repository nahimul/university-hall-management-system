import React from 'react';
import { Link } from 'react-router-dom';
import './personalinfostyle.css';
import Contact from '../contactus/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserInfo = () => {
  return (
    <div>
      <div className="person-details pi">
        <Link to="/">
          <button className="back" type="submit">
            <FontAwesomeIcon
              aria-hidden="true"
              className="i"
              icon={faArrowLeft}
            />{' '}
            Go Back
          </button>
        </Link>
        <h2 className="info-container">Personal Information</h2>
        <div className="details">
          <div className="person-image">
            <img alt="Event" src={process.env.PUBLIC_URL + '/images.png'} />
          </div>
          <div className="person-info">
            <div className="name">
              <h1 className="name">Md. Nahimul Islam</h1>
            </div>
            <div className="more-details">
              <table>
                <tbody>
                  <tr>
                    <td>Student ID</td>
                    <td>:1911077121</td>
                  </tr>
                  <tr>
                    <td>Registration No</td>
                    <td>:1911077121</td>
                  </tr>
                  <td>Registration No</td>
                  <td>:1911077121</td>
                  <tr>
                    <td>Student Type</td>
                    <td>:Resident</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>:Information &Communication Engineering</td>
                  </tr>
                  <tr>
                    <td>Program</td>
                    <td>:UNDERGRADUATE</td>
                  </tr>
                  <tr>
                    <td>Session</td>
                    <td>:2018-19</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>:0177*****02</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="hall-details pi">
        <h2 className="info-container">Allotment Details</h2>
        <div className="hall-info">
          <table>
            <tbody>
              <tr>
                <td>Room Number</td>
                <td>:140 C</td>
              </tr>
              <tr>
                <td>Allotment From</td>
                <td>:July,2020</td>
              </tr>
              <tr>
                <td>Allotment Expires</td>
                <td>:July,2025</td>
              </tr>

              <tr>
                <td>Emergency Contact Persion</td>
                <td>:Rahik bhai ( Brother )</td>
              </tr>
              <tr>
                <td>Emergency Contact Persion Number</td>
                <td>:01774366602</td>
              </tr>
              <tr>
                <td>Latest Result</td>
                <td>:CGPA 3.5 ( Third Year )</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="fees-info">
        <div className="select-year">
          <h2>Hall Fees</h2>
          <select>
            <option>2022</option>
            <option>2022</option>
          </select>  
        </div>
        <div className="fees-data-table">
        <table>
            <tbody>
              <tr>
                <th>FEE NAME</th>
                <th>FEE DUEATION</th>
                <th>AMOUNT</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
              </tr>
              <tr>
                <td>Monthly Fee</td>
                <td>5 month</td>
                <td>500 BDT</td>
                <td>10 July, 2024</td>
                <td><boutton>Paid</boutton> </td>
              </tr>
              <tr>
                <td>Internet Fee</td>
                <td>1 year</td>
                <td>350 BDT</td>
                <td>10 July, 2024</td>
                <td><boutton type="submit">Due</boutton> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
