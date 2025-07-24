import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [editBooking, setEditBooking] = useState(null);
  const [editForm, setEditForm] = useState({ eventName: '', date: '', location: '', guests: '', message: '' });
  const [deletingId, setDeletingId] = useState(null);

  const fetchBookings = async () => {
    try {
      const res = await fetch("https://emsfinalprojectbackend-production.up.railway.app/api/bookings/my", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch bookings");
      }
      setBookings(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleEditClick = (booking) => {
    setEditBooking(booking);
    setEditForm({
      eventName: booking.eventName || '',
      date: booking.date || '',
      location: booking.location || '',
      guests: booking.guests || '',
      message: booking.message || '',
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://emsfinalprojectbackend-production.up.railway.app/api/bookings/update/${editBooking._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(editForm),
        }
      );
      if (!res.ok) throw new Error('Failed to update booking');
      setEditBooking(null);
      fetchBookings();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://emsfinalprojectbackend-production.up.railway.app/api/bookings/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!res.ok) throw new Error('Failed to delete booking');
      setDeletingId(null);
      fetchBookings();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl w-full mx-auto mt-10 px-3 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-[#50c878] mb-10">📋 My Bookings</h2>
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#50c878] mb-2">{booking.eventName}</h3>
                <p className="text-gray-700 mb-1"><strong>Date:</strong> {booking.date}</p>
                <p className="text-gray-700 mb-1"><strong>Location:</strong> {booking.location}</p>
                <p className="text-gray-700 mb-1"><strong>Guests:</strong> {booking.guests}</p>
                {booking.message && <p className="text-gray-700 mb-2"><strong>Message:</strong> {booking.message}</p>}
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleEditClick(booking)} className="text-sm px-3 py-1 bg-[#50c878] text-white rounded hover:opacity-90">Edit</button>
                  <button onClick={() => setDeletingId(booking._id)} className="text-sm px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Booking</h3>
            <form onSubmit={handleEditSubmit}>
              <input type="text" name="eventName" value={editForm.eventName} onChange={handleEditChange} className="w-full border px-4 py-2 rounded mb-3" placeholder="Event Name" required />
              <input type="date" name="date" value={editForm.date} onChange={handleEditChange} className="w-full border px-4 py-2 rounded mb-3" required />
              <input type="number" name="guests" value={editForm.guests} onChange={handleEditChange} className="w-full border px-4 py-2 rounded mb-3" placeholder="Guests" required />
              <input type="text" name="location" value={editForm.location} onChange={handleEditChange} className="w-full border px-4 py-2 rounded mb-3" placeholder="Location" required />
              <textarea name="message" value={editForm.message} onChange={handleEditChange} className="w-full border px-4 py-2 rounded mb-3" placeholder="Message (optional)" rows={2} />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setEditBooking(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-[#50c878] text-white hover:opacity-90">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Delete Booking</h3>
            <p className="text-gray-700 mb-6">Are you sure you want to delete this booking?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeletingId(null)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
              <button onClick={() => handleDelete(deletingId)} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default MyBookings;
