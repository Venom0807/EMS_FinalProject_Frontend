import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../components/Toast";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({ show: false, msg: "", type: "success" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setToast({ show: true, msg: err.response?.data?.error || "Login failed", type: "error" });
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        tokenId: credentialResponse.credential,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Login
          </button>
        </form>

        {toast.show && (
          <Toast message={toast.msg} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
        )}

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="mt-4 flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setMessage("Google login failed")} />
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-[#50c878] hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;