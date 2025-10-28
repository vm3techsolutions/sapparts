"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function KeyBenefitsSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      title: t("benefits.0.title"),
      desc: t("benefits.0.desc"),
    },
    {
      title: t("benefits.1.title"),
      desc: t("benefits.1.desc"),
    },
    {
      title: t("benefits.2.title"),
      desc: t("benefits.2.desc"),
    },
    {
      title: t("benefits.3.title"),
      desc: t("benefits.3.desc"),
    },
    {
      title: t("benefits.4.title"),
      desc: t("benefits.4.desc"),
    },
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
          className=""
        />
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>


      {/* Overlay content */}
      <div className="relative z-10  mx-auto sm:px-5 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48] mb-4">
          {t("key_benefits_heading")}
        </h2>
        <p className="text-lg md:text-xl font-medium mb-4">
          {t("key_benefits_subheading")}
        </p>

        {/* 🔸 Description below subheading */}
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-4xl mx-auto">
          {t("key_benefits_description")}
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 px-6 sm:px-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FACC48]/30 border border-white rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-md hover:shadow-[#fff]"
            >
              <FaCheckCircle className="text-3xl mb-4 text-[#FACC48]" />
              <p className="text-lg md:text-xl font-semibold mb-2">
                {benefit.title}
              </p>
              <p className="text-sm text-gray-100">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
