import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);
      setMessage(res.data.msg);
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input type="text" className="form-control my-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" className="form-control my-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" className="form-control my-2" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      {message && <p className="text-center mt-3 text-danger">{message}</p>}
    </div>
  );
}

export default Signup;
