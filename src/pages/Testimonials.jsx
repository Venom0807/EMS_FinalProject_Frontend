import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Planner",
    feedback:
      "Eventify made my job effortless. I could coordinate everything from one place and my clients were thrilled!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Corporate Organizer",
    feedback:
      "The budget tracking and vendor management features are outstanding. My event ran smoother than ever.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Gonzalez",
    role: "Birthday Host",
    feedback:
      "I hosted my daughter's birthday with Eventify. The templates saved me hours and it looked professional!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Tech Conference Manager",
    feedback:
      "Live RSVP tracking is a game changer. I could plan seating and meals accurately for 500+ guests.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Fatima Noor",
    role: "Freelance Coordinator",
    feedback:
      "I love how clean and intuitive the platform is. The custom invites feature is so polished.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Thomas Lee",
    role: "Music Festival Organizer",
    feedback:
      "We've used several tools before, but Eventify is on another level. Reliable, efficient, and truly modern.",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <Navbar></Navbar>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-[1.85rem] md:text-4xl font-bold text-center text-[#50c878] mb-12"
            data-aos="fade-up"
          >
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="border-l-4 border-[#50c878] pl-6 pr-2 py-4 text-gray-700 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="italic text-lg leading-relaxed mb-4">
                  “{t.feedback}”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="block font-semibold text-[#50c878]">
                      {t.name}
                    </span>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Testimonials;
