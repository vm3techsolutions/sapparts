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
      <div className="mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="Heading">
            {t("heatTreatments.sectionTitle", { defaultValue: "Heat Treatments" })}
          </h2>
          {/* <p className="Paragraph sm:px-16">
            {t("heatTreatments.description1", { defaultValue: "" })}
          </p>
          <p className="Paragraph sm:px-16">
            {t("heatTreatments.description2", { defaultValue: "" })}
          </p> */}
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/technology/CastingProcess.png"
                alt="Heat Treatments"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-6">
              {t("heatTreatments.subtitle", {
                defaultValue: "Our Core Heat Treatment Processes",
              })}
            </h3>

            <div className="space-y-6">
              {processes.map((item, idx) => (
                <div key={idx}>
                  {/* <span className="text-[#FACC48] font-bold mr-2">
                    {item.num}
                  </span> */}
                  <h4 className="inline font-semibold text-lg text-[#0E509E]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
