"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SAPHubBearings() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto">
        {/* Left Image with Mobile Title */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-2 md:order-1">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">{t("SAP Hub Bearings")}</h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/SAPHubBearings.png"
              alt="SAP Hub Bearings"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          {/* Desktop Title */}
          <h2 className="Heading hidden md:block">{t("SAP Hub Bearings")}</h2>

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
