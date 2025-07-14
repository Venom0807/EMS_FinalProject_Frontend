import { useState } from "react";
import axios from "axios";

function BookEvent() {
  const [form, setForm] = useState({ eventName: "", eventDate: "", guests: "", location: "", phone: "", review: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const payload = {
        eventName: form.eventName,
        eventDate: form.eventDate,
        guests: Number(form.guests),
        location: form.location,
        message: form.review, // send review as message
      };
      const res = await fetch("http://localhost:5000/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Booking successful!");
        setForm({ eventName: "", eventDate: "", guests: "", location: "", phone: "", review: "" });
      } else {
        alert("Error: " + (data.error || data.message));
      }
    } catch (err) {
      alert("Server error.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mt-5">
      <h2>Book an Event</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input
          type="text"
          className="form-control my-2"
          name="eventName"
          placeholder="Event Name"
          value={form.eventName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="form-control my-2"
          name="eventDate"
          value={form.eventDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="form-control my-2"
          name="guests"
          placeholder="Number of People"
          value={form.guests}
          onChange={handleChange}
          min="1"
          required
        />
        <input
          type="text"
          className="form-control my-2"
          name="location"
          placeholder="Event Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        {/* Optional fields for frontend only */}
        <input
          type="text"
          className="form-control my-2"
          name="phone"
          placeholder="Phone Number (optional)"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          className="form-control my-2"
          name="review"
          placeholder="Your Review (optional)"
          value={form.review}
          onChange={handleChange}
          rows={3}
        />
        <button type="submit" className="btn btn-danger w-100" disabled={loading}>
          {loading ? "Booking..." : "Book Event"}
        </button>
      </form>
      {message && <p className="text-center mt-3 text-danger">{message}</p>}
    </div>
  );
}

export default BookEvent;
