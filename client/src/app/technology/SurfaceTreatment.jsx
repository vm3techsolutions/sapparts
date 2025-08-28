"use client";

import { useTranslation } from "react-i18next";

export default function SurfaceTreatment() {
  const { t } = useTranslation();

  const treatments = [
    {
      number: "01",
      title: t("surface.treatments.1.title"),
      desc: t("surface.treatments.1.desc"),
    },
    {
      number: "02",
      title: t("surface.treatments.2.title"),
      desc: t("surface.treatments.2.desc"),
    },
    {
      number: "03",
      title: t("surface.treatments.3.title"),
      desc: t("surface.treatments.3.desc"),
    },
    {
      number: "04",
      title: t("surface.treatments.4.title"),
      desc: t("surface.treatments.4.desc"),
    },
    {
      number: "05",
      title: t("surface.treatments.5.title"),
      desc: t("surface.treatments.5.desc"),
    },
  ];

  return (
    <section className="Section bg-white">
      {/* Title */}
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
          {t("surface.title")}
        </h2>
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E] mt-2">
          {t("surface.subtitle")}
        </h3>
        <p className="Paragraph text-center mt-3">
          {t("surface.description")}
        </p>
      </div>

      {/* First Row: 3 cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {treatments.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md"
          >
            {/* Number */}
            <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
              {item.number}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row: 2 cards centered */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
        {treatments.slice(3).map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#D9D9D9]/20 p-6 rounded-lg shadow-md w-full sm:w-1/2"
          >
            {/* Number */}
            <span className="absolute top-3 left-3 text-3xl font-bold text-[#FACC48]/30">
              {item.number}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0E509E] mt-5 text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-md text-gray-700 leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
