import React from 'react';
import { Link, useParams } from 'react-router-dom';
import EventContainer from './eventcontainer'; 
import './eventstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Events = () => {

  const { id } = useParams(); 
  const [event, setEvent] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/events/get/${id}`)
      .then((res) => {
        setEvent(res.data.data);
        console.log(event);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  if (!event) {
    return <div>Loading....</div>
  }

  return (
    <div className="details-container">
      {/*Event Details */}
      <div className="event-details">
        <Link to="/Home">
          <button className="back" type="'submit">
            <FontAwesomeIcon className="i" icon={faArrowLeft} aria-hidden="true"/> Go Back
          </button>
        </Link>
        <div className="details">
          <div className="event-image">
          <img src={event.images}
                    alt="Event"
                  />
          </div>
          <div className="event-text">
            <p className="date">
              <i className="far fa-calendar-check"></i> {event.date}
            </p>
            <h3>{event.title}</h3>
            <p>
              {event.description}
            </p>
          </div>
        </div>
      </div>
      <EventContainer/>
      </div>
  );
};

export default Events;
