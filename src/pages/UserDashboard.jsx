import React from 'react';
import EventTable from '../components/EventTable';
import AchievementCard from '../components/AchievementCard';

const achievements = [
    { title: "50+ Events Planned", description: "Successfully managed over 50 events with glowing feedback." },
    { title: "Best Decor Award", description: "Won best decoration at the City Wedding Fest 2023." },
    { title: "5-Star Rating", description: "Rated 5 stars by more than 90% of users." },
    { title: "Trusted by Corporates", description: "Partnered with 10+ companies for corporate events." },
    { title: "On-Time Guarantee", description: "Delivered 100% of events on schedule." },
];

const UserDashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <h1 className="text-4xl font-bold text-center text-[#50c878] mb-10">My Dashboard</h1>

            {/* Achievements Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">My Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((ach, idx) => (
                        <AchievementCard key={idx} title={ach.title} description={ach.description} />
                    ))}
                </div>
            </div>

            {/* History Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Event History</h2>
                <EventTable />
            </div>
        </div>
    );
};

export default UserDashboard;
