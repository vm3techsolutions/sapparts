"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function SealOFix() {
  const { t } = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        <h2 className="Heading block md:hidden text-center">{t("SealOFixTitle")}</h2>

        <div className="w-full mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            {t("SealOFixTitle")}
          </h2>

          {/* Directions For Use */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{t("DirectionsTitle")}</h3>
            <ul>
              {[1,2,3,4,5,6].map((i) => (
                <li key={i} className="flex items-start gap-2 pt-1">
                  <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                  {t(`Directions${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Storage */}
          <div className="pt-10">
            <h3 className="text-2xl font-bold mb-2">{t("StorageTitle")}</h3>
            <ul>
              {[1,2,3].map((i) => (
                <li key={i} className="flex items-start gap-2 pt-1">
                  <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                  {t(`Storage${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Caution */}
          <div className="pt-10">
            <h3 className="text-2xl font-bold mb-2">{t("CautionTitle")}</h3>
            <ul>
              {[1,2,3,4].map((i) => (
                <li key={i} className="flex items-start gap-2 pt-1">
                  <FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />
                  {t(`Caution${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[80vh] rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
