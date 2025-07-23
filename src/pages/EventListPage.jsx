import React from 'react';
import EventCard from '../components/EventCard';
import '../styles/EventListPage.css';
import startup from '../assets/startup.jpg'
import musicalf from '../assets/musicalf.jpg'
import techconf from '../assets/techconf.jpg'
import robot from '../assets/robot.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const dummyEvents = [
    {
        id: 1,
        title: 'Startup Pitch Night',
        date: 'Aug 10, 2025',
        location: 'Lahore, Pakistan',
        image: startup,
        description: 'Join innovative minds and pitch your ideas to top investors.',
    },
    {
        id: 2,
        title: 'Music Festival',
        date: 'Sep 5, 2025',
        location: 'Karachi, Pakistan',
        image: musicalf,
        description: 'Experience the biggest musical event of the year!',
    },
    {
        id: 3,
        title: 'Tech Conference 2025',
        date: 'Oct 12, 2025',
        location: 'Islamabad, Pakistan',
        image: techconf,
        description: 'A gathering of the brightest tech minds in South Asia.',
    },
    {
        id: 4,
        title: 'Robots Exhibition 2025',
        date: 'Oct 12, 2025',
        location: 'Islamabad, Pakistan',
        image: robot,
        description: 'An exhibition of the unique robots from all over the world',
    },
];

const EventListPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="event-list-page">
                <h1 className='text-[#50c878]'>Upcoming Events</h1>
                <div className="event-grid">
                    {dummyEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default EventListPage;
