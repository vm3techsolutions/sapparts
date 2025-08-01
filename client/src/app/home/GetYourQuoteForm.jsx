"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function QuoteFormSection() {
   const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    requirement: ""
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
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          topic: "Quote Form",
          message: formData.requirement
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMsg("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          requirement: ""
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
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#363636] mb-4">
            {t('Quote Title')}
          </h2>
          <p className="Paragraph">
            {t('Quote Para 1')}
          </p>
          <p className="Paragraph">
            {t('Quote Para 2')}
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-[#0E509E] text-white p-6 md:p-8 rounded-md shadow-md w-full max-w-md mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-[#FACC48]">
      {t('Quote Heading')}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder={t("Placeholder Name")}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              type="text"
              name="mobile"
              required
              placeholder={t('Placeholder Mobile')}
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={t('Placeholder Email')}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            />
            <textarea
              name="requirement"
              required
              placeholder={t('Placeholder Requirement')}
              value={formData.requirement}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded border border-[#D9D9D9] bg-transparent text-white placeholder-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FACC48] text-[#363636] px-5 py-2 rounded font-semibold hover:bg-white transition"
            >
              {loading ? t('Button Sending') : t('Button Send')}
            </button>

            {/* Success / Error message */}
            {successMsg && <p className="text-green-300 mt-2">{t("Success Message")}</p>}
            {errorMsg && <p className="text-red-300 mt-2">{t("Error Message")}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
