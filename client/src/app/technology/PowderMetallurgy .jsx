"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PowderMetallurgy() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="mx-auto text-center space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
          {t("powder.title")}
        </h2>

        {/* Subtitle */}
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E]">
          {t("powder.subtitle1")}
        </h3>

        {/* Description */}
        <div className="space-y-2 text-center text-[#363636] text-base leading-relaxed">
          <p className="Paragraph">{t("powder.desc1")}</p>
          <p className="Paragraph">{t("powder.desc2")}</p>
          <p className="Paragraph">{t("powder.desc3")}</p>
        </div>

        {/* Subtitle */}
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E] mt-4">
          {t("powder.subtitle2")}
        </h3>

        {/* Description */}
        <p className="text-[#363636] text-base leading-relaxed text-center -mt-2">
          {t("powder.desc4")}
        </p>
      </div>
    </section>
  );
}
