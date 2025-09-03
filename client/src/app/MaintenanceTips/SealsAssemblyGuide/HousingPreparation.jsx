"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HousingPreparation() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 -mt-10 sm:mt-2 ">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("HousingPreparationTitle1")}
          </h3>
          <p className="Paragraph">
            {t("HousingPreparationDesc1")}
          </p>
        </div>

        {/* Right Side - Images */}
        <div className="w-full md:w-1/2 sm:p-4 space-y-8">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[25vh] rounded object-cover"
          />
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[25vh] rounded object-cover"
          />
        </div>
      </div>

      {/* Approved Assembly Lubricants */}
      <div className="flex flex-col md:flex-row sm:gap-8 items-start pt-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 -mt-6 sm:mt-2 ">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("ApprovedAssemblyLubricantsTitle1")}
          </h3>
          <p className="Paragraph">
            {t("ApprovedAssemblyLubricantsDesc1")}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={200}
            height={270}
            className="w-full h-auto sm:h-[30vh] rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
