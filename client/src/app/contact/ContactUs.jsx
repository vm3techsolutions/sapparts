"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          topic: "Contact Form",
          message: formData.requirement, // 👈 backend me bhi "requirement" ka data bheja
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMsg("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "",
        });
      } else {
        setErrorMsg("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("❌ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white Section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between sm:gap-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E509E] mb-4 sm:text-left">
            {t("Contact Us")}
          </h2>
          <p className="Paragraph sm:text-left font-semibold">
            {t("Contact Description")}
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
            placeholder={t("Full Name")}
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 bg-white"
            required
          />

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              name="phone"
              placeholder={t("Phone no.")}
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-1/2 px-4 py-2 bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("Email")}
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-1/2 px-4 py-2 bg-white"
              required
            />
          </div>

          <textarea
            name="requirement"
            placeholder={t("Placeholder Requirement")}
            value={formData.requirement}
            onChange={handleChange}
            rows="5"
            className="w-full mb-4 px-4 py-2 bg-white resize-none"
            required
          ></textarea>

          <div className="w-full flex flex-col items-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0E509E] hover:bg-[#FACC48] hover:text-black text-white font-semibold py-1 px-6 rounded"
            >
              {loading ? t("Button Sending") : t("Submit")}
            </button>

            {/* Success / Error messages */}
            {successMsg && (
              <p className="text-green-600 mt-2">{t("Success Message")}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 mt-2">{t("Error Message")}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
