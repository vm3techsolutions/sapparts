"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function StrategySection() {
  const { t } = useTranslation();

  const items = [
    t("Quality-Driven Environment"),
    t("Collaborative Teamwork"),
    t("Continuous Improvement"),
    t("Employee Skill Development"),
    t("Safety & Accountability")
  ];

  return (
    <div className="Section bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left Images */}
        <div className="flex gap-6 md:mt-0 mt-8">
          <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/career/WorkCulture1.png"
              alt="Strategy Image 1"
              width={250}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          <div className="sm:w-[250px] sm:h-[60vh] w-[20vh] h-[30vh] rounded-lg overflow-hidden shadow-md sm:mt-24 mt-16">
            <Image
              src="/assets/career/WorkCulture2.png"
              alt="Strategy Image 2"
              width={250}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <h2 className="Heading">{t("Work Culture")}</h2>
          <p className="Paragraph text-left">
            {t("This handy tool helps you create dummy text for all your layout needs. We are gradually adding new")}
          </p>

          <div className="space-y-6 mt-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[#0E509E] text-xl font-medium"
              >
                {item}

                {/* Number Box */}
                <div className="w-8 h-8 bg-[#FACC48] text-[#0E509E] flex items-center justify-center rounded">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
