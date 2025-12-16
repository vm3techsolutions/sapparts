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
      <div className="mx-auto">

        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="Heading">
            {t("grinding.title", { defaultValue: "" })}
          </h2>
          <p className="Paragraph sm:px-16 mt-4">
            {t("grinding.description", { defaultValue: "" })}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/technology/CastingProcess.png"
                alt="Grinding & Superfinishing"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-6">
              {t("grinding.subtitle", { defaultValue: "" })}
            </h3>

            <div className="space-y-6">
              {processes.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-lg text-[#0E509E]">
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
