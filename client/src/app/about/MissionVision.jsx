"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function MissionVisionSection() {
  const { t } = useTranslation();

  return (
    <div className="Section bg-[#F6F8FC]">
      <h2 className="Heading text-center">
        {t("Mission & Vision")}
      </h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        
        {/* Vision */}
        <div className="bg-[#134285] text-white p-6 rounded-md text-center flex flex-col justify-start h-[350px] md:h-[350px] lg:h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">{t("Vision")}</h3>
          <p className="MissionVision text-center overflow-hidden">
            {t("Vision-Statement")}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#134285] text-white p-6 rounded-md text-center flex flex-col justify-start h-[350px] md:h-[350px] lg:h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">{t("Mision")}</h3>
          <p className="MissionVision text-center overflow-hidden">
            {t("Mision-Statement")}
          </p>
        </div>

      </div>
    </div>
  );
}
