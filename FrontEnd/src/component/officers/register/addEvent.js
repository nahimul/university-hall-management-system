import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './addEvent.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const initialValue={
        title:'',
        date:'',
        description:'',
    };
  const navigate= useNavigate();
    const [event,setNotice]=useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit]= useState(false);
    const [image,setImage]=useState(null);

    const handleFileChange = e => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleChange= e=>{
        const {name,value}=e.target;
        setNotice({...event,[name]: value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(event));
        setIsSubmit(true);
        if(Object.keys(formErrors).length===0 && isSubmit){
          const formData = new FormData();
          formData.append('title', event.title);
          formData.append('date', event.date);
          formData.append('description', event.description);
          formData.append('images', image);
            axios.post('http://localhost:8080/api/v1/events/add',formData)
            .then(res=>{
              console.log(res);
              Swal.fire({ 
                title: 'Event Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              }) 
              navigate('/register');
            }

          )
            .catch(err=>console.log(err));
        }
    };

    const validate=(event)=>{
        const errors={};
        if(!event.title){
            errors.title='* Title is required!';
        } 
        if( !event.date){
            errors.date='* Time & date is required!';
        }
        if( !event.description){
            errors.description='* Description is required!';
        }
        if(!image){
            errors.uploaded='* File is required!';
        }
        return errors;
    };

  return (
    <div className="event-form">
        {/* <pre>{JSON.stringify(event, undefined, 2)}</pre>  */}
      <h1>Add a new event</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="title-date">
            <div className="title">
              <label for="title">Title:</label>
              <input id="title" 
              type="text"
              name='title'
              value={event.title}
              onChange={handleChange}
               />
            </div>
            {formErrors.title && <p id='errors'>{formErrors.title}</p>}
            <div className="date">
              <label for="date">Date:</label>
              <input id="date" 
              type="date"
              name='date'
              value={event.date}
              onChange={handleChange} />
            </div>
            {formErrors.date && <p id='errors'>{formErrors.date}</p>}
          </div>
          <div className="description">
            <label for="desc">Description about event:</label>
            <textarea id="desc"  
              name='description'
              value={event.description}
              onChange={handleChange}/>
          </div>
          {formErrors.description && <p id='errors'>{formErrors.description}</p>}
          <div className="upload">
            <label for="upload-file">Upload file: </label>
            <input id="upload-file" type="file" 
             name='image'
             onChange={handleFileChange}/>
          </div>
          {formErrors.uploaded && <p id='errors'>{formErrors.uploaded}</p>}
          <div className="action-addevent">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="cancel" type="reload">
              Cancel
            </button>            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
