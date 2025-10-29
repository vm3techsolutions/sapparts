"use client";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs3() {
  const { t } = useTranslation();

  const products = t("whyChooseUs4.products", { returnObjects: true });
  const materials = t("whyChooseUs4.materials", { returnObjects: true });

  return (
    <section className="bg-white Section">
      <div className="mx-auto text-center px-6">
        {/* 🏷️ Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A7A] mb-4">
          {t("whyChooseUs4.title")}
        </h2>

        {/* 📄 Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          {t("whyChooseUs4.description")}
        </p>

        {/* 🔹 Lists Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-[#0A2A7A] text-lg mb-2">
              {t("whyChooseUs4.productsTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {Array.isArray(products) &&
                products.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h3 className="font-semibold text-[#0A2A7A] text-lg mb-2">
              {t("whyChooseUs4.materialsTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {Array.isArray(materials) &&
                materials.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
