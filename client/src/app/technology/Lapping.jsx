"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachineImage() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 items-stretch">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E509E]">
            {t("machineImage.title", { defaultValue: "" })}
          </h2>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {t("machineImage.para1", { defaultValue: "" })}
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {t("machineImage.para2", { defaultValue: "" })}
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {t("machineImage.para3", { defaultValue: "" })}
          </p>
        </div>

        {/* RIGHT IMAGE — MATCH TEXT HEIGHT */}
        <div className="md:w-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/assets/strategy/CenterBanner.png"
              alt="CNC Machining"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
