import React from 'react';
import { Link } from 'react-router-dom';
import EventContainer from './eventcontainer'; 
import './eventstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Events = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/events/get')
      .then((res) => {
        console.log(res.data.data);
        setEvents(res.data.data);
        console.log(events);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

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
          <img src={process.env.PUBLIC_URL + '/event1.png'}
                    alt="Event"
                  />
          </div>
          <div className="event-text">
            <p className="date">
              <i className="far fa-calendar-check"></i> 01 July 2024
            </p>
            <h3>Event Title</h3>
            <p>
              Event Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque dolor iste exercitationem unde cum at
              nihil pariatur fugit alias. Totam dolores reiciendis asperiores
              quibusdam nihil sunt voluptates voluptatum dolore nesciunt? Event
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Itaque dolor iste exercitationem unde cum at nihil pariatur
              fugit alias. Totam dolores reiciendis asperiores quibusdam nihil
              sunt voluptates voluptatum dolore nesciunt? Event Description
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolor iste exercitationem unde cum at nihil pariatur fugit alias.
              Totam dolores reiciendis asperiores quibusdam nihil sunt
              voluptates voluptatum dolore nesciunt? Event Description Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
              iste exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt? Event Description Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Itaque dolor iste
              exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt? Event Description Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Itaque dolor iste
              exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt?
              Event Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque dolor iste exercitationem unde cum at
              nihil pariatur fugit alias. Totam dolores reiciendis asperiores
              quibusdam nihil sunt voluptates voluptatum dolore nesciunt? Event
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Itaque dolor iste exercitationem unde cum at nihil pariatur
              fugit alias. Totam dolores reiciendis asperiores quibusdam nihil
              sunt voluptates voluptatum dolore nesciunt? Event Description
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolor iste exercitationem unde cum at nihil pariatur fugit alias.
              Totam dolores reiciendis asperiores quibusdam nihil sunt
              voluptates voluptatum dolore nesciunt? Event Description Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
              iste exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt? Event Description Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Itaque dolor iste
              exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt? Event Description Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Itaque dolor iste
              exercitationem unde cum at nihil pariatur fugit alias. Totam
              dolores reiciendis asperiores quibusdam nihil sunt voluptates
              voluptatum dolore nesciunt?
            </p>
          </div>
        </div>
      </div>
      <EventContainer/>
      </div>
  );
};

export default Events;
