import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.date} • {event.location}</p>
                <p className="desc">{event.description.slice(0, 100)}...</p>
                <button className="view-btn">View Details</button>
            </div>
        </div>
    );
};

export default EventCard;
