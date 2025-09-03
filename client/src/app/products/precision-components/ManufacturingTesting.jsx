"use client";
import { useTranslation } from "react-i18next";

export default function ManufacturingTesting() {
  const { t } = useTranslation();

  const inHouse = t("manufacturingTesting6.inHouse.items", { returnObjects: true });
  const testing = t("manufacturingTesting6.testing.items", { returnObjects: true });

  return (
    <section className="Section bg-white">
      {/* Title */}
      <h2 className="Heading text-center">
        {t("manufacturingTesting6.sectionTitle")}
      </h2>
      <p className="text-center Paragraph">
        {t("manufacturingTesting6.description")}
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-8 mt-10 mx-auto">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            {t("manufacturingTesting6.inHouse.title")}
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            {inHouse.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group hover:bg-[#0E509E] hover:text-white border border-[#000000]/10">
          <h3 className="text-2xl font-bold text-[#0E509E] group-hover:text-white mb-2">
            {t("manufacturingTesting6.testing.title")}
          </h3>
          <hr className="w-10 border-t-2 border-yellow-400 mb-4" />
          <ul className="list-disc font-semibold mt-8 list-inside space-y-5 text-[#363636] group-hover:text-white">
            {testing.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
