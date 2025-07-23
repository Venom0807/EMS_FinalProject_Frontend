import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const features = [
        {
            title: "Multi-Event Dashboard",
            desc: "Manage multiple events at once from a single, powerful dashboard.",
            icon: "📊",
        },
        {
            title: "Live RSVP Tracking",
            desc: "Track attendee confirmations in real-time and optimize planning accordingly.",
            icon: "✅",
        },
        {
            title: "Customer Management",
            desc: "Connect and communicate easily with all customers through one platform.",
            icon: "📦",
        },
        {
            title: "Custom Invitations",
            desc: "Design and send beautiful event invitations directly from the system.",
            icon: "💌",
        },
        {
            title: "Secure Payments",
            desc: "Handle ticketing or booking payments securely with built-in options.",
            icon: "🔒",
        },
        {
            title: "Automated Reminders",
            desc: "Send personalized reminders to guests and staff to reduce no-shows.",
            icon: "📅",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-[#50c878] font-bold text-center mb-12" data-aos="fade-up">
                    we have powerful features
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl text-[#50c878] font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
