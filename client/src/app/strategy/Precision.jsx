"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.box1.title"),
      description: t("features.box1.desc"),
    },
    {
      title: t("features.box2.title"),
      description: t("features.box2.desc"),
    },
    {
      title: t("features.box3.title"),
      description: t("features.box3.desc"),
    },
    {
      title: t("features.box4.title"),
      description: t("features.box4.desc"),
    },
    {
      title: t("features.box5.title"),
      description: t("features.box5.desc"),
    },
    {
      title: t("features.box6.title"),
      description: t("features.box6.desc"),
    },
    {
      title: t("features.box7.title"),
      description: t("features.box7.desc"),
    },
  ];

  return (
    <section className="bg-[#FACC48] Section">
      {/* Section Title */}
      <h2 className="text-center Heading">{t("features.title")}</h2>

      <div className="flex flex-col items-center gap-10 mt-4">
        {/* Row 1: First 4 Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.slice(0, 4).map((feature, i) => (
            <div
              key={i}
              className="bg-white w-64 h-44 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-lg"
            >
              <h3 className="text-lg font-semibold text-[#0E509E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Remaining 3 Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.slice(4).map((feature, i) => (
            <div
              key={i}
              className="bg-white w-64 h-44 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-lg"
            >
              <h3 className="text-lg font-semibold text-[#0E509E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
