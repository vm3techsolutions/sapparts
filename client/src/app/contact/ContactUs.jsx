"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send data via email or API here
    console.log(formData);
  };

  return (
    <section className="bg-white Section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between sm:gap-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E509E] mb-4 sm:text-left">
            Contact Us
          </h2>
          <p className="Paragraph sm:text-left font-semibold">
            Let’s start a conversation – we’d love to hear from you!
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-[#F5F5F5] p-6 rounded-md shadow-sm w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2  bg-white "
            required
          />

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone no."
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-1/2 px-4 py-2 bg-white "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-1/2 px-4 py-2 bg-white "
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full mb-4 px-4 py-2 bg-white  resize-none"
            required
          ></textarea>

         <div className="w-full flex justify-center">
  <button
    type="submit"
    className="bg-[#0E509E] hover:bg-[#FACC48] hover:text-black text-white font-semibold py-1 px-6 rounded"
  >
    Submit
  </button>
</div>

        </form>
      </div>
    </section>
  );
}
