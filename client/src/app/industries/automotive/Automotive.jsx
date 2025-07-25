"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AutomotiveSection() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Supporting the Backbone of Mobility
</h2>

        {/* Left Side - Image */}
       <div className="w-full md:w-1/2 sm:p-4">
  <Image
    src="/assets/industries/Automotive1.png"
    alt="Supporting the Backbone of Mobility"
    width={300}
    height={370}
    className="w-full h-auto sm:h-[70vh] rounded  transition-transform duration-500 transform hover:scale-105"
  />
</div>


        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">{t("Supporting the Backbone of Mobility")}</h2>
          <p className="Paragraph">{t("Automotive-paragraph")}</p>
        </div>
      </div>
    </div>
  );
}
