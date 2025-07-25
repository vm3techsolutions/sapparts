"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CentrifugalCasting() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-[#F5F5F5] px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center  gap-10">
        
        {/* Right Side (Mobile First) - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            {t("Centrifugal Casting")}
          </h2>
          <Image
            src="/assets/technology/Centrifugal1.png"
            alt="Centrifugal Casting"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow  transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Left Side - Description */}
        <div className="w-full md:w-1/2  space-y-6">
          <ul className="space-y-4 text-md leading-6">
            <li>
              <strong className="text-black text-xl">• {t("Centricast")}</strong><br />
              {t("Robotic Centrifugal Casting - Alloy Cast Iron")}
            </li>
            <li>
              <strong className="text-black text-xl">• {t("Centrifugal Casting")}</strong><br />
              {t("Ni-Hard")} &amp; {t("High Chrome Alloy White Cast Iron")}
            </li>
            <li>
              <strong className="text-black text-xl">• {t("Precision Machining")}</strong><br />
              {t("CNC Machining")} &lt; 400 {t("mm Dia.")}<br />
              {t("VTL Machining")} &lt; 1500 {t("mm Dia.")}
            </li>
            <li>
              <strong className="text-black text-xl">• {t("Heat Treatment")}</strong><br />
              {t("Cryogenic (Sub-Zero Temp.) Liquid Nitrogen treatment")}<br />
              {t("Destabilization of Castings")}<br />
              {t("Induction Hardening")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
