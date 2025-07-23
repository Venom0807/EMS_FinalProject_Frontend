import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const reasons = [
        {
            title: "End-to-End Event Planning",
            desc: "From venue selection to guest coordination, we handle every detail so you don’t have to.",
            icon: "🎯",
        },
        {
            title: "Real-Time Collaboration",
            desc: "Communicate with vendors, team members, and clients seamlessly in one place.",
            icon: "💬",
        },
        {
            title: "Smart Budget Tracking",
            desc: "Keep your event on budget with real-time analytics and expense tracking tools.",
            icon: "💰",
        },
        {
            title: "Beautiful Themes",
            desc: "Use pre-built themes and schedules to plan weddings, conferences, parties, and more.",
            icon: "📋",
        },
        {
            title: "24/7 Support",
            desc: "We're here anytime you need us to make sure your event goes off without a hitch.",
            icon: "🕒",
        },
        {
            title: "Data-Driven Insights",
            desc: "Gain valuable feedback and analytics from every event to continuously improve future experiences.",
            icon: "📊",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-[1.8rem] md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    Why Choose Us for Your Event?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white text-[#50c878] rounded-lg shadow-[#50c878] p-6 hover:shadow-xl transition"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-[2.25rem] mb-4">{item.icon}</div>
                            <h3 className="text-[1.2rem] font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
