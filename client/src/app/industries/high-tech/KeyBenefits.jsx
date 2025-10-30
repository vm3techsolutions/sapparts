"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function EngineeringPrecisionSection() {
  const { t } = useTranslation();

  const icons = ["✅", "🧩", "🔬", "🌍"];

  const points = [
    {
      title: t("engineering_precision_points.0.title"),
      desc: t("engineering_precision_points.0.desc"),
    },
    {
      title: t("engineering_precision_points.1.title"),
      desc: t("engineering_precision_points.1.desc"),
    },
    {
      title: t("engineering_precision_points.2.title"),
      desc: t("engineering_precision_points.2.desc"),
    },
    {
      title: t("engineering_precision_points.3.title"),
      desc: t("engineering_precision_points.3.desc"),
    },
  ];

  return (
    <div className="relative w-full h-auto bg-[#363636]/90 text-white py-10">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/industries/agriculture/KeyBenefits].png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto sm:px-10 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48] mb-4">
          {t("key_benefits_heading")}
        </h2>

        <p className="text-lg md:text-xl font-medium mb-4">
          {t("engineering_precision_heading")}
        </p>

        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-4xl mx-auto">
          {t("engineering_precision_subheading")}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 px-6 sm:px-0">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-[#FACC48]/30 border border-white rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-md hover:shadow-[#fff]"
            >
              <span className="text-4xl mb-4">{icons[index]}</span>

              <p className="text-lg md:text-xl font-semibold mb-2">
                {point.title}
              </p>

              <p className="text-md text-gray-100">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
