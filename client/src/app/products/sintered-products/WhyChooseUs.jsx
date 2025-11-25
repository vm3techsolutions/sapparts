"use client";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs2() {
  const { t } = useTranslation();

  const productsLeft = t("whyChooseUs3.productsLeft", { returnObjects: true });
  const productsRight = t("whyChooseUs3.productsRight", { returnObjects: true });

  const safeLeft = Array.isArray(productsLeft)
    ? productsLeft
    : typeof productsLeft === "string"
    ? productsLeft.split(",")
    : [];

  const safeRight = Array.isArray(productsRight)
    ? productsRight
    : typeof productsRight === "string"
    ? productsRight.split(",")
    : [];

  return (
    <section className="bg-white Section">
      <div className="mx-auto text-center px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A7A] mb-6">
          {t("whyChooseUs3.title")}
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {t("whyChooseUs3.description")}
        </p>

        {/* ✅ Subtitle Center */}
        <h3 className="text-lg md:text-xl font-semibold text-[#0A2A7A] mb-6 mt-10 text-center ">
          {t("whyChooseUs3.subtitle", "Some products include –")}
        </h3>

        {/* ✅ Product List Center */}
        <div className="flex justify-center ml-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {safeLeft.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {safeRight.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
