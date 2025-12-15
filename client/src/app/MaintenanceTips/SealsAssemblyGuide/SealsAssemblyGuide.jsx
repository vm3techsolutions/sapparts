"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function SealsAssemblyGuide() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">
          {t("SealsAssemblyGuideTitle1")}
        </h2>

        {/* Left Side - Text */}
        <div className="w-full md:w-1/2  sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            {t("SealsAssemblyGuideTitle1")}
          </h2>
          <h3 className="text-[#FACC48] text-2xl mb-4 font-bold ">
            {t("GuidelinesTitle1")}
          </h3>

          <h3 className="text-[#000000] text-2xl mb-4 font-bold ">
            {t("MechanicalSealDesignTitle1")}
          </h3>

          <p className="Paragraph">
            {t("MechanicalSealDesignDesc1")}
          </p>

          <div>
            <h3 className="text-2xl mb-4 font-bold sm:pt-10">
              {t("TerminologyTitle1")}
            </h3>

            <ul>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("SealRing1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("RubberToric1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("HousingRetainer1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("HousingRamp1")}
              </li>

              {/* Images inside terminology */}
              <div className="flex flex-wrap gap-8 sm:pl-10 pl-0 pt-2 pb-2">
                {/* <Image
                  src="/assets/industries/agriculture/Supporting.png"
                  alt="Supporting"
                  width={300}
                  height={370}
                  className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
                /> */}
                {/* <Image
                  src="/assets/industries/agriculture/Supporting.png"
                  alt="Supporting"
                  width={300}
                  height={370}
                  className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
                /> */}
              </div>

              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("SealRingHousing1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("SealRingFace1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("SealRingRamp1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("SealRingRetainingLip1")}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t("InstallationTool1")}
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/maintananceTip/MaintenanceTips-1.jpg"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
