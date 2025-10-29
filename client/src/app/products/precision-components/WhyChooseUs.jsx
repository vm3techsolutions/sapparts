"use client";
import { useTranslation } from "react-i18next";

export default function WhyChooseUsPrecision() {
  const { t } = useTranslation();

  const products = t("whyChooseUsPrecision.products", { returnObjects: true });

  return (
    <section className="bg-white Section">
      <div className="mx-auto text-center px-6">
        {/* 🏷️ Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A7A] mb-4">
          {t("whyChooseUsPrecision.title")}
        </h2>

        {/* 📄 Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          {t("whyChooseUsPrecision.description")}
        </p>

        {/* 🔹 Product List */}
        <div className="max-w-xl mx-auto text-left">
          <h3 className="font-semibold text-[#0A2A7A] text-lg mb-2">
            {t("whyChooseUsPrecision.productsTitle")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {Array.isArray(products) &&
              products.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
