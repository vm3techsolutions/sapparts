"use client";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section ">
      <div className=" mx-auto text-center px-6">
        {/* 🏷️ Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A7A] mb-4">
          {t("whyChooseUs2.title")}
        </h2>

        {/* 📄 Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {t("whyChooseUs2.description")}
        </p>
      </div>
    </section>
  );
}
