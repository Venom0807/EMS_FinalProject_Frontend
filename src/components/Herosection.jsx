import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero2.jpg'; // Make sure path is correct

const Herosection = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#00000090] to-transparent z-0" />

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-br from-[#50c878] via-[#56f78c] to-gray-500 bg-clip-text text-transparent">
          Streamline Every Event From Start to Finish
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-white">
          From intimate weddings to grand celebrations, our event management
          platform handles every detail so you can focus on what truly matters — the experience.
        </p>

        <p className="mt-4 inline-block border px-3 py-1 shadow rounded text-white">
          🎁 <span className="font-semibold">10% off</span> for the first 100 customers!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events"
            className="px-10 py-3 rounded-lg bg-[#50c878] text-white font-semibold hover:opacity-90 transition"
          >
            Explore Now
          </Link>
          <Link
            to="/bookevent"
            className="px-10 py-3 rounded-lg border border-[#50c878] text-[#50c878] hover:bg-[#50c878]/10 transition"
          >
            Start Planning
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
