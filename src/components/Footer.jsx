import React from "react";
import { Link } from "react-router-dom";
import icon from '../assets/iconm.png';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import github from '../assets/github.svg';

function Footer() {
  return (
    <footer className="text-gray-600 bg-black mt-2 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
  <img src={icon} alt="" />
  <span className="ml-3 text-[#50c878] text-[1.25rem]">Eventify</span>
</Link>
          <p className="mt-2 text-sm text-gray-500">All your favorite is here</p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Quick Links</h2>
            <ul className="list-none flex flex-col gap-2 mb-10">
  <li><Link to="/" className="text-gray-600 hover:text-[#50c878]">Home</Link></li>
  <li><Link to="/about" className="text-gray-600 hover:text-[#50c878]">About</Link></li>
  <li><Link to="/contact" className="text-gray-600 hover:text-[#50c878]">Contact</Link></li>
  <li><a href="/about#team" className="text-gray-600 hover:text-[#50c878]">Team</a></li>
</ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Contact Info</h2>
            <ul className="list-none flex flex-col gap-2 mb-10">
              <li><a className="text-gray-600 cursor-pointer hover:text-[#50c878]">ph: 123456789</a></li>
              <li><a className="text-gray-600 cursor-pointer hover:text-[#50c878]">Email: Eventify@gmail.com</a></li>
              <li><a className="text-gray-600 cursor-pointer hover:text-[#50c878]">Address: Arfa Kareem Tower, Lahore</a></li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#50c878] tracking-widest text-[1.1rem] mb-3">Social Media</h2>
            <ul className="list-none flex justify-center gap-4 items-center mb-10">
  <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a></li>
  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a></li>
</ul>
          </div>
        </div>
      </div>

      <div className="bg-[#50c878]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm">
            <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">
              © Eventify - All rights Reserved
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
  <a href="https://www.facebook.com/" className="text-white" target="_blank" rel="noopener noreferrer">
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  </a>
  <a href="https://www.youtube.com/" className="ml-3 text-white" target="_blank" rel="noopener noreferrer">
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  </a>
</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
