"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function KeyBenefitsSection() {
  const {t} = useTranslation();
  const benefits = [
    t("Ultra-Precision Engineering"),
    t("Advanced R&D for Custom Needs"),
    t("Trusted by Automation & Robotics OEMs"),
    t("Lightweight Yet Strong Designs"),
  ];

  return (
    <div className="relative w-full h-auto bg-[#363636]/90 text-white py-10">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/industries/agriculture/KeyBenefits].png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-20 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48] mb-4">{t("key_benefits_heading")}</h2>
        <p className="text-lg md:text-xl font-medium mb-10">{t("key_benefits_subheading")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-14 gap-6 px-10 sm:px-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FACC48]/30 border border-white rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-md hover:shadow-[#fff]"
            >
              <FaCheckCircle className="text-3xl mb-4 " />
              <p className="text-lg md:text-xl font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
