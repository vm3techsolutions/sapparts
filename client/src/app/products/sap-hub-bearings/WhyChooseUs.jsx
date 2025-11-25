"use client";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs4() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section">
      <div className="mx-auto text-center px-6">
        {/* 🏷️ Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A7A] mb-4">
          {t("whyChooseUs5.title")}
        </h2>

        {/* 📄 Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {t("whyChooseUs5.description")}
        </p>
      </div>
    </section>
  );
}
