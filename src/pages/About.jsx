import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Make sure this image exists
import Navbar from "../components/Navbar";
import hero2 from '../assets/hero2.jpg'
import Team from "../components/Team";
import Footer from "../components/Footer.jsx";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center" data-aos="fade-right">
              <img
                src={hero2}
                alt="About Event Management"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#50c878] mb-6">
                About Eventify
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Eventify</strong> is a next-generation event management platform designed to simplify, streamline, and elevate event planning for individuals and organizations. From small private parties to large-scale conferences, we offer smart tools and expert support to help you create unforgettable experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2025, we are a team of passionate event professionals, designers, and technologists who understand the complexities of event coordination. Our mission is to empower users with intuitive tools, real-time collaboration, and powerful automation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're organizing a wedding, corporate event, concert, or community gathering, <strong>Eventify</strong> is your trusted partner for seamless execution and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team></Team>
      <Footer></Footer>
    </>
  );

}

export default About;
