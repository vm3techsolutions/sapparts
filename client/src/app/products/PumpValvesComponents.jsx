"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PumpAndValvesSection() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start gap-10 mx-auto max-w-5xl">
        {/* Right Image (shown first on mobile) */}
        <div className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-2">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">
            {t("Pump and Valves Components")}
          </h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/PumpandValvesComponents.png"
              alt="Pump and Valves"
              width={400}
              height={400}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="w-full md:w-2/3 order-3 md:order-1">
          {/* Desktop Title */}
          <h2 className="Heading mb-4 hidden md:block">
            {t("Pump and Valves Components")}
          </h2>

          <div className="mb-3">
            <span className="font-semibold">{t("Materials")} :</span>
            <p className="text-md text-[#000000] mt-1">{t("Lorem Ipsum")}</p>
          </div>

          <p className="text-md text-[#000000] mb-3">
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.")}
          </p>

          <p className="text-md text-[#000000] mb-3">
            {t("Lorem ipsum dolor sit amet,")}
          </p>

          <p className="text-md text-[#000000] mb-3">
            <span className="font-semibold">{t("Sizes")} :</span> {t("Lorem ipsum dolor sit amet,")}
          </p>

          <p className="text-md text-[#000000] mb-3">
            <span className="font-semibold">{t("Applications")} :</span> {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.")}
          </p>
        </div>
      </div>
    </div>
  );
}
