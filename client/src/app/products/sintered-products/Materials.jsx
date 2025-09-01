"use client";
import { useTranslation } from "react-i18next";

export default function MaterialsSizes() {
  const { t } = useTranslation();

  const leftPoints = t("materialsSizes2.left.points", { returnObjects: true });
  const rightPoints = t("materialsSizes2.right.points", { returnObjects: true });

  return (
    <section className="bg-[#FACC48] Section">
      <h2 className="Heading text-center">
        {t("materialsSizes2.sectionTitle")}
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-0 items-start mt-9">
        {/* Left Column */}
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {t("materialsSizes2.left.title")}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            {leftPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:flex justify-center">
          <div className="w-[1.5px] h-80 bg-[#0E509E]" />
        </div>

        {/* Right Column */}
        <div className="text-[#0E509E]">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {t("materialsSizes2.right.title")}
          </h3>
          <ul className="text-[#363636] font-semibold space-y-5 list-disc list-outside pl-4">
            {rightPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
