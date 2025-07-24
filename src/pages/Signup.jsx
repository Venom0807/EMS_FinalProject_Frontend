import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../components/Toast";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({ show: false, msg: "", type: "success" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://emsfinalprojectbackend-production.up.railway.app/api/signup", form);
      setToast({ show: true, msg: "Account created successfully! Please login.", type: "success" });
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      console.log('Signup error response:', err.response);
      setToast({ show: true, msg: err.response?.data?.msg || err.response?.data?.error || "Signup failed", type: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-2xl w-full mx-auto mt-10 px-3 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#50c878]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#50c878]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#50c878]"
          />
          <button
            type="submit"
            className="w-full py-2 text-white rounded transition duration-300"
            style={{ backgroundColor: "#50c878" }}
          >
            Register
          </button>
        </form>

        {toast.show && (
          <Toast message={toast.msg} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
        )}

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#50c878] hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
