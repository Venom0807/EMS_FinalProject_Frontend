import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "ahmerPortfolio",
        "template_9yhuzhs",
        formRef.current,
        "gkGuSGi10eOfONqTt"
      )
      .then(
        () => {
          setStatus("Message sent ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send ❌ - Please try again.");
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-10 px-3 sm:px-6">
      <h2 className="text-[1.5rem] text-center font-semibold text-[#50c878] mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Feel free to reach out to us for your event planning needs.
      </p>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#50c878] focus:border-[#50c878]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#50c878] focus:border-[#50c878]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#50c878] focus:border-[#50c878]"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#50c878] cursor-pointer text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-sm text-center text-gray-700 mt-4">
          {status}
        </p>
      )}
    </div>
  );
}

export default Contact;
