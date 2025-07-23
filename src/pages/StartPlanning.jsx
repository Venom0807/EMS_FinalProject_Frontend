import React, { useState } from "react";

const StartPlanning = () => {
    const [form, setForm] = useState({
        eventType: "",
        date: "",
        location: "",
        guests: "",
        notes: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        alert("Thank you! Our team will contact you shortly.");
        setForm({
            eventType: "",
            date: "",
            location: "",
            guests: "",
            notes: ""
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#50c878] mb-6">Start Planning Your Event</h2>
                <p className="text-center text-gray-600 mb-8">
                    Whether it's a wedding, corporate event, or private party — we’re here to make it unforgettable. Fill out the form below and let's bring your vision to life.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Event Type</label>
                        <select
                            name="eventType"
                            value={form.eventType}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#50c878]"
                        >
                            <option value="">Select an event</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Concert">Concert</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#50c878]"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="City or Venue"
                            value={form.location}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#50c878]"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Estimated Guests</label>
                        <input
                            type="number"
                            name="guests"
                            placeholder="e.g., 150"
                            value={form.guests}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#50c878]"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium text-gray-700">Additional Notes</label>
                        <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            placeholder="Tell us more about your event..."
                            rows="4"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-[#50c878]"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="bg-[#50c878] text-white px-6 py-2 rounded hover:opacity-90 transition"
                        >
                            Submit & Start Planning
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StartPlanning;
