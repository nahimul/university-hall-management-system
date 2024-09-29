import React from 'react';
import { Link } from 'react-router-dom';
import './eventcontainerstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
const EventContainer = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/events/get')

      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
return (
    <div className="event-container">
      <h2>Recent Event</h2>
      {events.slice().reverse().map((event) => (
        <div className="event trans">
        <div className="event-image">
          <img src={event.images} alt="Event" />
        </div>
        <div className="event-text">
          <div className="descript">
            <p className="date">
              <FontAwesomeIcon className="i" icon={faCalendarCheck} /> {event.date}
            </p>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
          <div className="read-more">
            <Link to="/event">Read More</Link>
          </div>
        </div>
      </div>
        
      ))}
    </div>
  );
};

export default EventContainer;
