import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AllotmentInfo from '../allotment/allotmentinfo';
import './personalinfostyle.css';

const UserInfo = () => {
<<<<<<< HEAD
  const [user, setUser]= useState({});

  useEffect( () => {    
    axios.get('http://localhost:8080/api/v1/students/user'
      ,{
        withCredentials:true,
      }
    )
  .then((res)=>{    
      setUser(res.data.data);
  } )
  .catch((error)=>{
      console.log(error);
    }
  )
  },[]);

=======
>>>>>>> parent of a9d7b20 (Add Authenication and authorization of an user)
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
        <h2 className="info-container">Student Dashboard</h2>
        <div className="details">
          <div className="person-image">
            <img alt="Event" src={process.env.PUBLIC_URL + '/images.png'} />
          </div>
          <div className="person-info">
            <div className="name">
              <h1 className="name">Md. Nahimul Islam</h1>
            </div>
            <div >
              <table className="details-table">
                <tbody>
                  <tr>
                    <td>Student ID</td>
                    <td>: 1911077121</td>
                  </tr>
                  <tr>
                    <td>Registration No</td>
                    <td>: 1911077121</td>
                   </tr>
                   <tr> 
                    <td>Student Type</td>
                    <td>: Resident</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>: Information &Communication Engineering</td>
                  </tr>
                  <tr>
                    <td>Program</td>
                    <td>: UNDERGRADUATE</td>
                  </tr>
                  <tr>
                    <td>Session</td>
                    <td>: 2018-19</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>: 0177*****02</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        <AllotmentInfo/>
      </div>
  );
};

export default UserInfo;
