import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      setMessage("Login successful");
      localStorage.setItem("token", res.data.token); // store token
      localStorage.setItem("user", JSON.stringify(res.data.user)); // store user
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input type="email" className="form-control my-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" className="form-control my-2" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      {message && <p className="text-center mt-3 text-danger">{message}</p>}
    </div>
  );
}

export default Login;
