"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function MissionVisionSection() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-[#F6F8FC]">
      <h2 className="Heading text-center ">
        {t("Mission & Vision")}
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-12 mt-5">
        {/* Vision Card */}
        <div className="flex-1 bg-[#134285] text-white p-6 rounded-md text-center flex flex-col h-full min-h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">{t("Vision")}</h3>
          <p className="MissionVision text-center">
          {t("Vision-Statement")}
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 bg-[#134285] text-white p-6 rounded-md text-center flex flex-col h-full min-h-[350px]">
          <h3 className="text-3xl font-semibold mb-4">{t("Mision")}</h3>
          <p className="MissionVision text-center">
          {t("Mision-Statement")}
          </p>
        </div>
      </div>
    </div>
  );
}
