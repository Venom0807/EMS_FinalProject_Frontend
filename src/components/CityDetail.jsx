import React from 'react';
import { Link, useParams } from 'react-router-dom';
import food from '../assets/food.jpg'
import Networking from '../assets/networking.jpg'
import book from '../assets/book.jpg'
import tech from '../assets/tech.jpg'
import Navbar from './Navbar';

const eventsData = {
    lahore: [
        { title: "Food Carnival", img: food, desc: "Taste of Lahore's best dishes." },
        { title: "Startup Meetup", img: Networking, desc: "Networking for entrepreneurs." },
        { title: "Book Fair", img: book, desc: "Huge collection of books on sale." },
        { title: "Tech Expo", img: tech, desc: "Latest technology showcase." },
    ],
    karachi: [
        { title: "Food Carnival", img: "/images/event1.jpg", desc: "Taste of Lahore's best dishes." },
        { title: "Music Night", img: "/images/event2.jpg", desc: "Live performances and DJ." },
        { title: "Book Fair", img: "/images/event4.jpg", desc: "Huge collection of books on sale." },
        { title: "Tech Expo", img: "/images/event5.jpg", desc: "Latest technology showcase." },],
    islamabad: [
        { title: "Food Carnival", img: "/images/event1.jpg", desc: "Taste of Lahore's best dishes." }, { title: "Startup Meetup", img: "/images/event3.jpg", desc: "Networking for entrepreneurs." },
        { title: "Book Fair", img: "/images/event4.jpg", desc: "Huge collection of books on sale." },
        { title: "Tech Expo", img: "/images/event5.jpg", desc: "Latest technology showcase." },],
    multan: [
        { title: "Food Carnival", img: "/images/event1.jpg", desc: "Taste of Lahore's best dishes." },
        { title: "Music Night", img: "/images/event2.jpg", desc: "Live performances and DJ." },
        { title: "Startup Meetup", img: "/images/event3.jpg", desc: "Networking for entrepreneurs." },
        { title: "Tech Expo", img: "/images/event5.jpg", desc: "Latest technology showcase." },],
    peshawar: [
        { title: "Food Carnival", img: "/images/event1.jpg", desc: "Taste of Lahore's best dishes." },
        { title: "Startup Meetup", img: "/images/event3.jpg", desc: "Networking for entrepreneurs." },
        { title: "Book Fair", img: "/images/event4.jpg", desc: "Huge collection of books on sale." },
        { title: "Tech Expo", img: "/images/event5.jpg", desc: "Latest technology showcase." },],
};

const CityDetail = () => {
    const { cityName } = useParams();
    const events = eventsData[cityName] || [];

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto py-10 px-5">
                <h1 className="text-4xl font-bold text-[#50c878] mb-8 capitalize">
                    Current Events in {cityName}
                </h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {events.map((event, i) => (




                        <Link to={`/events/${cityName}/${event.title}`}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                                <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                                    <p className="text-gray-600 mt-2">{event.desc}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </>
    );
};

export default CityDetail;
