import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../allotmentform/allotmentform';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const ComplainBox = () => {

  const initialValue = {
    subject: '',
    description: '',
  };
  
  const navigate=useNavigate();

  const [formInput, setFormInput] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
     axios.post('http://localhost:8080/api/v1/students/complain',formInput
      ,{
        withCredentials:true,
      }
      )
    .then(res=>{
      console.log(res)
     Swal.fire({
      title: 'Complain Submitted Successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })
     navigate('/home');
    }
  )
    .catch(err=>{
      console.log(err);
      Swal.fire({
        title: 'Complain Not Submitted',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    });
  };

  return (
    <div className="allotmentform">
      <Link to="/Home">
        <button className="back" type="'submit">
          <FontAwesomeIcon
            className="i"
            icon={faArrowLeft}
            aria-hidden="true"
          />
          Go Back
        </button>
      </Link>
      <h1>Complain Box</h1>
      {/* <pre>{JSON.stringify(formInput, null, 2)}</pre> */}
      <form onSubmit={handleSubmit}>
        <h3>Subject of the Complain</h3>
        <div className="date">
          <input
            type="text"
            id="in"
            name="subject"
            value={formInput.subject}
            onChange={handleChange}
            placeholder="Write the type of the complain."
          />
        </div>
        <h3>What is your complain?</h3>
        <div className="application">
          <textarea
            type="text"
            id="application"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            placeholder="Write your complain."
          />
        </div>
        <div className="action">
          <button type="submit" id="submit">Submit</button>
          <button type="reset" id='cancel'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ComplainBox;
