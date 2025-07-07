"use client";
import { useState } from "react";

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    requirement: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add email sending logic here
  };

  return (
    <div className="mx-auto px-6 md:px-12 sm:py-12 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#363636] mb-4">
            All the facts – Lipsum generator
          </h2>
          <p className="Paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type ...
          </p>
          <p className="Paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type ...
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-[#0E509E] text-white p-6 md:p-8 rounded-md shadow-md w-full max-w-md mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-[#FACC48]">
            Get Your Quote Today!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              type="text"
              name="mobile"
              required
              placeholder="Mobile*"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <textarea
              name="requirement"
              required
              placeholder="Requirement*"
              value={formData.requirement}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#FACC48] text-[#363636] px-5 py-2 rounded font-semibold hover:brightness-110 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
