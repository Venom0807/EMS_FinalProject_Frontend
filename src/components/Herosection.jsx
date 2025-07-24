import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero2.jpg'; // Make sure path is correct

const Herosection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#00000090] to-transparent z-0" />
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 flex flex-col items-center justify-center relative z-10">
        <div className="text-center w-full max-w-2xl md:max-w-4xl mx-auto px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#50c878] via-[#56f78c] to-gray-500 bg-clip-text text-transparent leading-tight">
            Streamline Every Event From Start to Finish
          </h1>

          <p className="mt-4 max-w-md sm:max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-white">
            From intimate weddings to grand celebrations, our event management platform handles every detail so you can focus on what truly matters — the experience.
          </p>

          <p className="mt-4 inline-block border border-[#50c878] px-3 py-1 shadow rounded text-white text-sm sm:text-base">
            🎁 <span className="font-semibold">10% off</span> for the first 100 customers!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              to="/events"
              className="px-6 sm:px-10 py-2 sm:py-3 rounded-lg bg-[#50c878] text-white font-semibold hover:opacity-90 transition text-base sm:text-lg w-full sm:w-auto"
            >
              Explore Now
            </Link>
            <Link
              to="/bookevent"
              className="px-6 sm:px-10 py-2 sm:py-3 rounded-lg border border-[#50c878] text-[#50c878] hover:bg-[#50c878]/10 transition text-base sm:text-lg w-full sm:w-auto"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
