import React from 'react';
import book from '../assets/book.jpg'


const teamMembers = [
  { name: 'Ahmer Khan', role: 'Leadership & Supervision', image: book },
  { name: 'Abdul Wahid', role: 'Client Relationship Management', image: book },
  { name: 'Jahangir Javed', role: 'Branding & Design', image: book },
  { name: 'Sumama hassan', role: 'Budget & Resource Allocation', image: book },
  { name: 'Haris Ashfaq', role: 'Event Setup & Breakdown', image: book },
];

const Team = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#50c878]" data-aos="fade-up">
          Meet Our Team
        </h2>
        <p className="mt-2 text-gray-600" data-aos="fade-up" data-aos-delay="100">
          A passionate team dedicated to creating unforgettable event experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-[#50c878] mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
