import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './addEvent.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddNotice = () => {
    const initialValue={
        title:'',
        time:'',
        date:'',
        description:'',
    };
    const navigate= useNavigate();
    const [notice,setNotice]=useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit]= useState(false);
    const [docs,setDocs]=useState(null);
    const [Time,setTime]=useState(null);
    const [formateDate,setFormateDate]=useState(null);

    const handleFileChange = e => {
        const file = e.target.files[0];
        setDocs(file);
    };

    const handleTimeChange = e => {
      const { name, value } = e.target;
    const [hours, minutes] = value.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    console.log(formattedTime);
    setTime(formattedTime);
    setNotice({ ...notice, [name]: value });
    };

    const handleDateChange = e => {
        const {name,value}=e.target;
    const selectedDate = new Date(value);
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    console.log(formattedDate); 
    setFormateDate(formattedDate);
    setNotice({...notice,[name]: value});
    };

    const handleChange= e=>{
        const {name,value}=e.target;
        setNotice({...notice,[name]: value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(notice));
        setIsSubmit(true);
        if(Object.keys(formErrors).length===0 && isSubmit){
          const formData = new FormData();
          formData.append('title', notice.title);
          formData.append('time', Time);
          formData.append('date', formateDate);
          formData.append('description', notice.description);
          formData.append('upFile', docs);

          console.log("image: ",docs);
      
          axios.post('http://localhost:8080/api/v1/notices/add',formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },}
          )
            .then(res=>{console.log(res);
              Swal.fire({ 
                title: 'Notice Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              }) 
              navigate('/home');
            }
          )
            .catch(err=>console.log(err));
        }
    };

    const validate=(notice)=>{
        const errors={};
        if(!notice.title){
            errors.title='* Title is required!';
        } 
        if(!notice.time || !notice.date){
            errors.date='* Time & date is required!';
        }
        if(!docs){
            errors.uploaded='* File is required!';
        }
        return errors;
    };

  return (
    <div className="event-form">
      {/* <pre>{JSON.stringify(notice, undefined, 2)}</pre>  */}
      <h1>Add a new notice</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="title-date">
            <div className="title">
              <label for="title">Title:</label>
              <input id="title" 
              type="text"
              name='title'
              value={notice.title}
              onChange={handleChange}
               />
            </div>
            {formErrors.title && <p id='errors'>{formErrors.title}</p>}
            <div className="time-date">
              <label for="date">Time & Date:</label>
              <input id="time" 
              type="time"
              name='time'
              value={notice.time}
              onChange={handleTimeChange} />
              <input id="date" 
              type="date"
              name='date'
              value={notice.date}
              onChange={handleDateChange} />
            </div>
            {formErrors.date && <p id='errors'>{formErrors.date}</p>}
          </div>
          <div className="description">
            <label for="desc">Description about notice:</label>
            <textarea id="desc"  
              name='description'
              value={notice.description}
              onChange={handleChange}/>
          </div>
          <div className="upload">
            <label for="upload-file">Upload file: </label>
            <input id="upload-file" type="file" 
             name='upFile'
             multiple
             onChange={handleFileChange}/>
          </div>
          {formErrors.uploaded && <p id='errors'>{formErrors.uploaded}</p>}
          <div className="action-addevent">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="cancel" type="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotice;
