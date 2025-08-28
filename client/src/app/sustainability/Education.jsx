"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section sm:-mt-16">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-left">
          <h2 className="Heading text-[#0E509E]">{t("education.title")}</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            {t("education.subtitle")}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {/* Left Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Education.png"
                alt={t("education.title")}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
                {t("education.description")}
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("education.initiativesTitle")}:
              </h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    • {t("education.initiatives.scholarships.title")}:
                  </span>{" "}
                  {t("education.initiatives.scholarships.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("education.initiatives.skillDevelopment.title")}:
                  </span>{" "}
                  {t("education.initiatives.skillDevelopment.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("education.initiatives.schoolPartnerships.title")}:
                  </span>{" "}
                  {t("education.initiatives.schoolPartnerships.desc")}
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("education.impactTitle")}:
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {t("education.impactDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
