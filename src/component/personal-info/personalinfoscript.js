import React from 'react';
import { Link } from 'react-router-dom';
import './personalinfostyle.css';
import Contact from '../contactus/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserInfo = () => {

    return(
        <div>
  <div className="person-details pi">
    <Link to="/">
      <button
        className="back"
        type="submit"
      >
        <FontAwesomeIcon 
          aria-hidden="true"
          className="i"
          icon={faArrowLeft}
        />
        {' '}Go Back
      </button>
    </Link>
    <h2 className="info-container">
      Personal Information
    </h2>
    <div className="details">
      <div className="person-image">
        <img
          alt="Event"
          src={process.env.PUBLIC_URL + '/images.png'}
        />
      </div>
      <div className="person-info">
        <div className="name">
          <h1 className="name">
            Md. Nahimul Islam
          </h1>
        </div>
        <div className="more-details">
          <table>
            <tbody>
              <tr>
                <th>
                  Department
                </th>
                <td>
                  :Information &Communication Engineering
                </td>
              </tr>
              <tr>
                <th>
                  Program
                </th>
                <td>
                  :UNDERGRADUATE
                </td>
              </tr>
              <tr>
                <th>
                  Reg No
                </th>
                <td>
                  :1911077121
                </td>
              </tr>
              <tr>
                <th>
                  Class Roll
                </th>
                <td>
                  :1911077121
                </td>
              </tr>
              <tr>
                <th>
                  Session
                </th>
                <td>
                  :2018-19
                </td>
              </tr>
              <tr>
                <th>
                  Phone
                </th>
                <td>
                  :0177*****02
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="hall-details pi">
    <h2 className="info-container">
      Hall Information
    </h2>
  </div>
</div>
    );
}

export default UserInfo;