"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function HousingGrrove() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white ">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row sm:gap-8 items-start pb-20">
        <h2 className="Heading block md:hidden text-center">
          {t("HousingGrooveTitle1")}
        </h2>

        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h3 className="text-[#000000] text-2xl mb-4 font-bold hidden md:block">
            {t("HousingGrooveTitle1")}
          </h3>

          {[1,2,3,4].map((step) => (
            <h3 key={step} className="pt-1">
              {t(`HousingGrooveStep${step}1`)}
            </h3>
          ))}

          <p className="Paragraph">{t("HousingGrooveDesc1")}</p>
        </div>

        <div className="w-full md:w-1/2 sm:p-4">
          {/* <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={200}
            height={270}
            className="w-full h-auto sm:h-[45vh] rounded object-cover"
          /> */}
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        <h2 className="Heading block md:hidden text-center -mt-10 sm:-mt-0 sm:pt-10">
          {t("HousingGrooveTitle2")}
        </h2>

        <div className="w-full mt-2 sm:mt-2">
          <ul>
            {[1,2,3].map((li) => (
              <li key={li} className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t(`HousingGrooveWarning${li}1`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 sm:p-4">
          {/* <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[16vh] rounded object-cover"
          /> */}
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        <h2 className="Heading block md:hidden text-center pt-10">
          {t("HousingGrooveTitle3")}
        </h2>

        <div className="w-full mt-6 sm:mt-2">
          <ul>
            {[1,2,3,4,5,6].map((li) => (
              <li key={li} className="flex items-start gap-2 pt-1">
                <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                {t(`HousingGrooveInstruction${li}1`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 sm:p-4">
          {/* <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[30vh] rounded object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
}
