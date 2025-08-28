"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachineImage() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full Section bg-white">
      {/* Mobile View - Only Image */}
      <div className="block sm:hidden">
        <Image
          src="/assets/strategy/CenterBanner.png"
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover w-full h-[30vh]"
        />
      </div>

      {/* Desktop View - Image with Overlay */}
      <div className="hidden sm:block relative w-full rounded-md">
        {/* Background Image */}
        <Image
          src="/assets/strategy/CenterBanner.png"
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover w-full sm:h-[80vh] transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-md"
        />

        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-[#363636]/75 flex flex-col justify-center items-center text-center sm:px-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
            {t("machineImage.title")}
          </h2>
          <p className="text-white mt-4 leading-relaxed">
            {t("machineImage.para1")}
          </p>
          <p className="text-white mt-4 leading-relaxed">
            {t("machineImage.para2")}
          </p>
          <p className="text-white mt-4 leading-relaxed">
            {t("machineImage.para3")}
          </p>
        </div>
      </div>
    </div>
  );
}
