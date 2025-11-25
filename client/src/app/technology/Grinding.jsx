"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function GrindingSuperfinishing() {
  const { t } = useTranslation();

  const processes = [
    {
      title: t("grinding.processes.centerless.title", { defaultValue: "" }),
      desc: t("grinding.processes.centerless.desc", { defaultValue: "" }),
    },
    {
      title: t("grinding.processes.bore.title", { defaultValue: "" }),
      desc: t("grinding.processes.bore.desc", { defaultValue: "" }),
    },
    {
      title: t("grinding.processes.surface.title", { defaultValue: "" }),
      desc: t("grinding.processes.surface.desc", { defaultValue: "" }),
    },
  ];

  return (
    <section className="Section bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col h-full">
          <h2 className="Heading">
            {t("grinding.title", { defaultValue: "" })}
          </h2>

          <p className="Paragraph mt-4">
            {t("grinding.description", { defaultValue: "" })}
          </p>

          {/* Image bottom aligned */}
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

        {/* RIGHT SIDE */}
        <div className="bg-[#FACC48] p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-xl font-semibold text-[#0E509E] text-center mb-6">
            {t("grinding.subtitle", { defaultValue: "" })}
          </h3>

          {/* 3 Rows */}
          <div className="flex flex-col gap-4 mt-auto">
            {processes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow border border-[#0E509E] text-center"
              >
                <h4 className="font-bold text-[#0E509E]">{item.title}</h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
