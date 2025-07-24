import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
const eventInfo = {
    "Food Carnival": {
        price: "Rs. 500",
        date: "August 15, 2025",
        venue: "Expo Center, Hall 2",
        time: "4:00 PM - 10:00 PM"
    },
    "Music Night": {
        price: "Rs. 800",
        date: "August 20, 2025",
        venue: "Beach View Club",
        time: "6:00 PM - 12:00 AM"
    },
    "Startup Meetup": {
        price: "Free (Registration Required)",
        date: "August 25, 2025",
        venue: "Tech Incubator Hub",
        time: "2:00 PM - 6:00 PM"
    },
    "Book Fair": {
        price: "Rs. 100",
        date: "August 10 - 17, 2025",
        venue: "Central Library Grounds",
        time: "10:00 AM - 8:00 PM"
    },
    "Tech Expo": {
        price: "Rs. 600",
        date: "September 5, 2025",
        venue: "Tech Arena, Hall A",
        time: "11:00 AM - 7:00 PM"
    }
};

const EventDetails = () => {
    const { eventTitle } = useParams();
    const details = eventInfo[eventTitle] || {};

    return (
        <>
            <Navbar />
            <div className="max-w-3xl w-full mx-auto py-8 px-3 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-[#50c878] mb-6">{eventTitle}</h1>
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4 text-gray-700">
                    <p><span className="font-semibold">Date:</span> {details.date}</p>
                    <p><span className="font-semibold">Venue:</span> {details.venue}</p>
                    <p><span className="font-semibold">Time:</span> {details.time}</p>
                    <p><span className="font-semibold">Ticket Price:</span> {details.price}</p>

                    <button className="mt-6 bg-[#50c878] text-white px-6 py-2 rounded hover:opacity-90 transition">
                        Buy Ticket
                    </button>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
