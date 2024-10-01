import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './allotmentform.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const AllotmentForm = () => {
  
  const initialValue = {
    result: '',
    emergencyPerson: '',
    emergencyContact: '',
    expectedDate: '',
    details: '',
  };
  
  const navigate=useNavigate();

  const [formInput, setFormInput] = useState(initialValue);
  const [docs,setDocs]=useState(null);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setDocs(file);
  };


  const handleChange = e => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
      console.log(formInput);
      const formData = new FormData();
      formData.append('result', formInput.result);
      formData.append('emergencyPerson', formInput.emergencyPerson);
      formData.append('emergencyContact', formInput.emergencyContact);
      formData.append('expectedDate', formInput.expectedDate);
      formData.append('details', formInput.details);
      formData.append('docs', docs);
      console.log("docs : ",docs);
      console.log(formData);
      axios.post('http://localhost:8080/api/v1/students/allotmentform',formData

      ,{
        withCredentials:true,
      }
      )
    .then(res=>{
      console.log(res)
     Swal.fire({
      title: 'Allotment Form Submitted Successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })
     navigate('/home');
    })
      .catch(err=>{console.log(err)
        Swal.fire({
          title: 'Allotment Form Submission Failed',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      })
    
  };


return (
    <div className="allotmentform">
      <pre>{JSON.stringify(formInput, null, 2)}</pre>
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
      <h1>Apply for allotment</h1>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor='result'>
          <h3>Latest Result: </h3>
          </label>
          <input type='text' 
          id='result' 
          placeholder='write your latest result'
          name='result'
          value={formInput.result}
          onChange={handleChange}
          />
        <div className='emergency'>
          <div>

          <h3>Emergency Contact Person</h3>
          <input type='text' id='contact' 
          placeholder='Emergency contact person Rel.'
          name='emergencyPerson'
          value={formInput.emergencyPerson}
          onChange={handleChange}
          />
          </div>
          <div>
          <h3>Emergency Contact Person Number</h3>
          <input type='text' id='contact' 
          placeholder='Emergency contact person number'
          name='emergencyContact'
          value={formInput.emergencyContact}
          onChange={handleChange}
          />
          </div>
        </div>
        <h3>Allotment wanted date</h3>
      <div className="date">
        <input
          type="text"
          id="in"
          placeholder="write diser date "
          name="expectedDate"
          value={formInput.expectedDate}
          onChange={handleChange}
        />
      </div>
        <h3>Why you want allotment?</h3>
      <div className="application">
        <textarea type="text" 
        id="application" placeholder="write your application."
        name='details'
        value={formInput.details}
        onChange={handleChange}
        />
      </div> 

      <div className="file">
        <label htmlFor="file"><h3>Upload your Documents</h3></label>
        <input 
        type="file" 
        id="file"
        name="docs"
        accept='.pdf'
        onChange={handleFileChange}/>
      </div>

      <div className="action">
        <button type="submit" id='submit'>Submit</button>
        <button type="reset" id='cancel'>Cancel</button>
      </div>
      </form>
    </div>
  );
};

export default AllotmentForm;
