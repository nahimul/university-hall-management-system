import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './addEvent.css';
const AddNotice = () => {
    const initialValue={
        title:'',
        time:'',
        date:'',
        description:'',
        uploaded:''
    };

    const [notice,setNotice]=useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit]= useState(false);

    const handleChange= e=>{
        const {name,value}=e.target;
        setNotice({...notice,[name]: value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(notice));
        setIsSubmit(true);
        if(Object.keys(formErrors).legnth===0 && isSubmit){
            axios.post('http://localhost:3001/register',notice)
            .then(res=>console.log(res))
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
        if(!notice.uploaded){
            errors.uploaded='* File is required!';
        }
        return errors;
    };

  return (
    <div className="event-form">
        <pre>{JSON.stringify(notice, undefined, 2)}</pre> 
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
              onChange={handleChange} />
              <input id="date" 
              type="date"
              name='date'
              value={notice.date}
              onChange={handleChange} />
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
            <input id="upload-file" type="upload" 
             name='uploaded'
             value={notice.uploaded}
             onChange={handleChange}/>
          </div>
          {formErrors.uploaded && <p id='errors'>{formErrors.uploaded}</p>}
          <div className="action-addevent">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="cancel" type="cancel">
              Cancel
            </button>
            <button className="delete" type="delete">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotice;
