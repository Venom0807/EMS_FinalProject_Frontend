import React from 'react';

const eventHistory = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    date: `2023-${(i % 12) + 1}-15`,
    type: i % 2 === 0 ? "Wedding" : "Corporate",
    status: i % 3 === 0 ? "Completed" : "In Progress",
}));

const EventTable = () => {
    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
                <thead className="bg-[#50c878] text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">#</th>
                        <th className="px-6 py-3 text-left">Event Name</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Type</th>
                        <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {eventHistory.map((event) => (
                        <tr key={event.id} className="border-b hover:bg-gray-50 transition">
                            <td className="px-6 py-4">{event.id}</td>
                            <td className="px-6 py-4">{event.title}</td>
                            <td className="px-6 py-4">{event.date}</td>
                            <td className="px-6 py-4">{event.type}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-3 py-1 text-sm rounded-full ${event.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {event.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;
