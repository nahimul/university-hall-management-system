import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './addEvent.css';
const AddEvent = () => {
    const initialValue={
        title:'',
        date:'',
        description:'',
        uploaded:''
    };

    const [event,setNotice]=useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit]= useState(false);

    const handleChange= e=>{
        const {name,value}=e.target;
        setNotice({...event,[name]: value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(event));
        setIsSubmit(true);
        if(Object.keys(formErrors).legnth===0 && isSubmit){
            axios.post('http://localhost:3001/register',event)
            .then(res=>console.log(res))
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
        if(!event.uploaded){
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
             name='uploaded'
             value={event.uploaded}
             onChange={handleChange}/>
          </div>
          {formErrors.uploaded && <p id='errors'>{formErrors.uploaded}</p>}
          <div className="action-addevent">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="cancel" type="reload">
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

export default AddEvent;
