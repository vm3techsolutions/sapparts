"use client";
import { useTranslation } from "react-i18next";

export default function HeatTreatments() {
   const {t} = useTranslation()
const processes = [
  {
    title: t("process.hardening.title"),
    desc: t("process.hardening.desc"),
  },
  {
    title: t("process.cryogenic.title"),
    desc: t("process.cryogenic.desc"),
  },
  {
    title: t("process.induction.title"),
    desc: t("process.induction.desc"),
  },
  {
    title: t("process.carburizing.title"),
    desc: t("process.carburizing.desc"),
  },
  {
    title: t("process.laser.title"),
    desc: t("process.laser.desc"),
  },
  {
    title: t("process.plugquenching.title"),
    desc: t("process.plugquenching.desc"),
  },
];

  return (
    <section className="Section bg-white">
      <div className=" mx-auto text-center">
        {/* Title */}
        <h2 className="Heading text-center">{t("Heat Treatments")}</h2>
        <p className="Paragraph text-center sm:px-16">
         {t("At SAP Parts")}
        </p>
        <p className="Paragraph text-center sm:px-16">
          {t(" We have our own")}
        </p>

        {/* Subtitle */}
        <h3 className="mt-8 text-xl font-semibold text-[#0E509E]">
         {t(" Our Core Heat Treatment Processes")}
        </h3>
      </div>

      {/* Grid Rows */}
      <div className="mt-8 space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl border border-[#D9D9D9]/40 rounded-xl overflow-hidden">
          {processes.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 text-center ${
                idx !== 2 ? "sm:border-r border-[#FACC48]" : ""
              }`}
            >
              <h4 className="text-lg font-medium text-[#FACC48]">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl border border-[#D9D9D9]/40 rounded-xl overflow-hidden">
          {processes.slice(3, 6).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 text-center ${
                idx !== 2 ? "sm:border-r  border-[#FACC48]" : ""
              }`}
            >
              <h4 className="text-lg font-medium text-[#FACC48]">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
