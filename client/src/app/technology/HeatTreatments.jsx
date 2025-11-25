"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeatTreatments() {
  const { t } = useTranslation();

  const processes = [
    {
      num: "01",
      title: t("process.hardening.title", { defaultValue: "Hardening" }),
      desc: t("process.hardening.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
    {
      num: "02",
      title: t("process.cryogenic.title", { defaultValue: "Cryogenic Treatment" }),
      desc: t("process.cryogenic.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
    {
      num: "03",
      title: t("process.induction.title", { defaultValue: "Induction Hardening" }),
      desc: t("process.induction.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
    {
      num: "04",
      title: t("process.carburizing.title", { defaultValue: "Carburizing" }),
      desc: t("process.carburizing.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
    {
      num: "05",
      title: t("process.laser.title", { defaultValue: "Laser Hardening" }),
      desc: t("process.laser.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
    {
      num: "06",
      title: t("process.plugquenching.title", { defaultValue: "Plug Quenching" }),
      desc: t("process.plugquenching.desc", { defaultValue: "Lorem ipsum dummy text." }),
    },
  ];

  return (
    <section className="Section bg-white">
  <div className="container mx-auto flex flex-col md:flex-row gap-10 items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex flex-col md:w-1/2">
      <h2 className="Heading">
        {t("heatTreatments.sectionTitle", { defaultValue: "Heat Treatments" })}
      </h2>
      <p className="text-black mb-2">
        {t("heatTreatments.description1", { defaultValue: "At SAP Parts" })}
      </p>
      <p className="text-black mb-6">
        {t("heatTreatments.description2", { defaultValue: "We have our own" })}
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg h-full">
        <Image
          src="/assets/technology/CastingProcess.png"
          alt="Heat Treatment"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT SIDE CARDS */}
   {/* RIGHT SIDE CARDS */}
<div className="flex flex-col md:w-1/2 self-end">

  {/* Subtitle */}
  <h3 className="mb-4 text-xl font-semibold text-[#0E509E]">
    {t("heatTreatments.subtitle", {
      defaultValue: "Our Core Heat Treatment Processes",
    })}
  </h3>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {processes.map((item, idx) => (
      <div
        key={idx}
        className="bg-white text-black p-5 rounded-lg shadow-md hover:shadow-xl duration-300"
      >
        <span className="w-10 h-10 flex items-center justify-center bg-[#0E509E] text-white font-bold rounded-md mb-3 text-lg">
          {item.num}
        </span>
        <h4 className="font-semibold text-[#FACC48] text-lg mb-1">{item.title}</h4>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

</div>

  </div>
</section>

  );
}
