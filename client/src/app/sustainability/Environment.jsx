"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Environment() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-right">
          <h2 className="Heading text-[#0E509E]">{t("environment.title")}</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            {t("environment.subtitle")}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-8">
          {/* Left Side - Content */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
                {t("environment.description")}
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("environment.initiativesTitle")}:
              </h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    • {t("environment.initiatives.treePlantation.title")}:
                  </span>{" "}
                  {t("environment.initiatives.treePlantation.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("environment.initiatives.sustainablePractices.title")}:
                  </span>{" "}
                  {t("environment.initiatives.sustainablePractices.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("environment.initiatives.awarenessCampaigns.title")}:
                  </span>{" "}
                  {t("environment.initiatives.awarenessCampaigns.desc")}
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("environment.impactTitle")}:
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {t("environment.impactDesc")}
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Environment.png"
                alt={t("environment.title")}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
