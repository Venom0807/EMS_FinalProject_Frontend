import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import icon from '../assets/iconm.png';
import CategoryDropdown from '../components/CategoryDropdown.jsx';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={icon} width={45} alt="Logo" />
          <span className="ml-3 text-[1.5rem] cursor-pointer text-[#50c878] font-semibold">Eventify</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-base">
          <Link to="/" className="hover:text-[#50c878]">Home</Link>
          <Link to="/about" className="hover:text-[#50c878]">About</Link>
          <Link to="/gallery" className="hover:text-[#50c878]">Gallery</Link>
          <Link to="/bookevent" className="hover:text-[#50c878]">BookEvent</Link>
          <Link to="/testimonials" className="hover:text-[#50c878]">Testimonials</Link>
          {isLoggedIn && (
            <Link to="/mybooking" className="hover:text-[#50c878]">My Bookings</Link>
          )}
          <CategoryDropdown />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <button className="bg-[#50c878] text-white px-4 py-2 rounded hover:opacity-90 transition">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="border border-[#50c878] text-[#50c878] px-4 py-2 rounded hover:bg-[#50c878] hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-[#50c878] cursor-pointer text-white px-5 py-2 rounded hover:opacity-90 transition">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col p-4 space-y-3 text-white">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#50c878]">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-[#50c878]">About</Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-[#50c878]">Gallery</Link>
            <Link to="/bookevent" onClick={toggleMenu} className="hover:text-[#50c878]">BookEvent</Link>
            <Link to="/testimonials" onClick={toggleMenu} className="hover:text-[#50c878]">Testimonials</Link>
            {isLoggedIn && (
              <Link to="/mybooking" onClick={toggleMenu} className="hover:text-[#50c878]">My Bookings</Link>
            )}
            <div onClick={toggleMenu}><CategoryDropdown /></div>

            <div className="pt-4 border-t border-gray-700 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard">
                    <button className="bg-[#50c878] w-full text-white px-4 py-2 rounded hover:opacity-90 transition">
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="border border-[#50c878] text-[#50c878] px-4 py-2 rounded hover:bg-[#50c878] hover:text-white transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="bg-[#50c878] w-[20%] text-white px-4 py-2 rounded hover:opacity-90 transition">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
