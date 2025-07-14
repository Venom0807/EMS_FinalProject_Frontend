import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings/my", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch bookings");
      }

      setBookings(data); // Should be an array
    } catch (err) {
      console.error("Error fetching bookings", err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="container mt-5">
      <h2>📋 My Bookings</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <div className="row">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.eventName}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {booking.date} <br />
                    <strong>Location:</strong> {booking.location}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-3">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
