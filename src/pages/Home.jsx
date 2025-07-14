import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCalendarCheck, FaBookOpen, FaPhone } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          localStorage.removeItem("user");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      {user ? (
        <>
          {/* Welcome Section */}
          <div className="text-center mb-4">
            <FaUserCircle size={80} className="text-primary mb-2" />
            <h2>Welcome, {user.name}!</h2>
            <p className="text-muted">Manage your bookings and explore new events</p>
          </div>

          {/* Cards Section */}
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://source.unsplash.com/400x200/?event" className="card-img-top" alt="Events" />
                <div className="card-body text-center">
                  <FaCalendarCheck className="text-success mb-2" size={24} />
                  <h5 className="card-title">View Events</h5>
                  <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => navigate('/gallery')}>Explore</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://source.unsplash.com/400x200/?booking,event" className="card-img-top" alt="Book Event" />
                <div className="card-body text-center">
                  <FaBookOpen className="text-warning mb-2" size={24} />
                  <h5 className="card-title">Book Event</h5>
                  <button className="btn btn-outline-warning btn-sm w-100 mt-2" onClick={() => navigate('/book-event')}>Book Now</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://source.unsplash.com/400x200/?concert,light" className="card-img-top" alt="My Bookings" />
                <div className="card-body text-center">
                  <FaCalendarCheck className="text-info mb-2" size={24} />
                  <h5 className="card-title">My Bookings</h5>
                  <button className="btn btn-outline-info btn-sm w-100 mt-2" onClick={() => navigate("/my-bookings")}>View</button>

                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://source.unsplash.com/400x200/?support,customer" className="card-img-top" alt="Support" />
                <div className="card-body text-center">
                  <FaPhone className="text-danger mb-2" size={24} />
                  <h5 className="card-title">Contact Support</h5>
                  <button className="btn btn-outline-danger btn-sm w-100 mt-2" onClick={() => navigate('/contact')}>Contact</button>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Loading user data...</p>
      )}
    </div>
  );
}

export default Home;
