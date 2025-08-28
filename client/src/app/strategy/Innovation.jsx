"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FeatureCardsSection() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("featureCards.box1.title"),
      desc: t("featureCards.box1.desc"),
    },
    {
      title: t("featureCards.box2.title"),
      desc: t("featureCards.box2.desc"),
    },
    {
      title: t("featureCards.box3.title"),
      desc: t("featureCards.box3.desc"),
    },
    {
      title: t("featureCards.box4.title"),
      desc: t("featureCards.box4.desc"),
    },
    {
      title: t("featureCards.box5.title"),
      desc: t("featureCards.box5.desc"),
    },
    {
      title: t("featureCards.box6.title"),
      desc: t("featureCards.box6.desc"),
    },
  ];

  return (
    <section className="Section bg-[#D9D9D9]/10">
      {/* Title */}
      <h2 className="text-center Heading">{t("featureCards.title")}</h2>

      {/* Description */}
      <p className="Paragraph text-center">{t("featureCards.description")}</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group border border-[#D9D9D9]/70 rounded-lg bg-white p-6 text-center transition-all duration-300 hover:bg-[#0E509E]"
          >
            <h3 className="text-xl font-semibold text-[#0E509E] mb-2 transition-colors duration-300 group-hover:text-[#FACC48]">
              {card.title}
            </h3>
            <p className="text-[#363636] transition-colors duration-300 group-hover:text-white">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
