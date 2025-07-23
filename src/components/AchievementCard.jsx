import React from 'react';

const AchievementCard = ({ title, description }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-[#50c878] hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#50c878] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default AchievementCard;
