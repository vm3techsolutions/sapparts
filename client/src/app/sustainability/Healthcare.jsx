"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Healthcare() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-left">
          <h2 className="Heading text-[#0E509E]">{t("healthcare.title")}</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            {t("healthcare.subtitle")}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {/* Left Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Healthcare.png"
                alt={t("healthcare.title")}
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
                {t("healthcare.description")}
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("healthcare.initiativesTitle")}:
              </h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    • {t("healthcare.initiatives.medicalCamps.title")}:
                  </span>{" "}
                  {t("healthcare.initiatives.medicalCamps.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("healthcare.initiatives.healthAwareness.title")}:
                  </span>{" "}
                  {t("healthcare.initiatives.healthAwareness.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("healthcare.initiatives.supportPrograms.title")}:
                  </span>{" "}
                  {t("healthcare.initiatives.supportPrograms.desc")}
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("healthcare.impactTitle")}:
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {t("healthcare.impactDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
