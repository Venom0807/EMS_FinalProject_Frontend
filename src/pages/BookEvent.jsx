import { useState } from "react";
import "../styles/BookEvent.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookEvent() {
  const [form, setForm] = useState({
    eventName: "",
    eventDate: "",
    guests: "",
    location: "",
    phone: "",
    review: "",
  });
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
        message: form.review,
      };

      const res = await fetch("https://emsfinalprojectbackend-production.up.railway.app/api/bookings/create", {
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
    <>
      <Navbar></Navbar>
      <div className="bgImage">
        <div className=" p-1">
          <div className="max-w-xl mx-auto mt-10 px-4">
            <h2 className="text-[1.5rem] text-[#50c878] font-semibold text-center mb-6">Eventify Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="eventName"
                placeholder="Event Name"
                value={form.eventName}
                onChange={handleChange}
                required
                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <input
                type="date"
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                required
                className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <input
                type="number"
                name="guests"
                placeholder="Number of People"
                value={form.guests}
                onChange={handleChange}
                min="1"
                required
                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <input
                type="text"
                name="location"
                placeholder="Event Location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <textarea
                name="review"
                placeholder="Your Review (optional)"
                value={form.review}
                onChange={handleChange}
                rows={3}
                className="w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-[#50c878]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-[#50c878]   font-semibold py-3 rounded-md transition"
              >
                {loading ? "Booking..." : "Book Event"}
              </button>
            </form>
            {message && <p className="text-center text-red-500 mt-4">{message}</p>}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );

}

export default BookEvent;
