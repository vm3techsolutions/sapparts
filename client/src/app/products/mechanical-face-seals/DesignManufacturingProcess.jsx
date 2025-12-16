"use client";
import { useTranslation } from "react-i18next";

const steps = [
  "Raw material selection & inspection",
  "Precision machining",
  "Surface lapping & polishing",
  "Flatness and parallelism testing",
  "Final quality inspection",
  "Secure packaging",
];

const highlights = [
  "CNC machining",
  "Advanced lapping machines",
  "In-house quality control",
];

export default function DesignManufacturingProcess() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center text-[#0E509E]">
        Design & Manufacturing Process
      </h2>

      <p className="text-center Paragraph  mx-auto">
        Purpose: Build trust & quality perception
      </p>

      {/* Process Steps */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-xl border border-black/10 shadow-sm hover:bg-[#0E509E] group transition-all duration-300"
          >
            {/* Step Number */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0E509E] text-white font-bold group-hover:bg-white group-hover:text-[#0E509E]">
              {index + 1}
            </div>

            {/* Step Text */}
            <p className="font-semibold text-[#363636] group-hover:text-white">
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center border border-black/10 hover:bg-[#0E509E] group transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-[#0E509E] group-hover:text-white">
              {item}
            </h4>
            <hr className="w-10 mx-auto mt-3 border-t-2 border-yellow-400" />
          </div>
        ))}
      </div>
    </section>
  );
}
