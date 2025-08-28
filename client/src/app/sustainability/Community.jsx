"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Community() {
  const { t } = useTranslation();

  return (
    <section className="bg-white Section">
      <div className="mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center md:text-right">
          <h2 className="Heading text-[#0E509E]">{t("community.title")}</h2>
          <p className="text-lg font-medium text-[#FACC48] mt-1">
            {t("community.subtitle")}
          </p>
        </div>

        {/* Image + Content */}
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-8">
          {/* Left Side - Content */}
          <div className="md:w-[65%] w-full flex items-start">
            <div>
              <p className="text-gray-700 leading-relaxed">
                {t("community.description")}
              </p>

              {/* Initiatives */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("community.initiativesTitle")}:
              </h3>
              <ul className="mt-2 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">
                    • {t("community.initiatives.livelihoodSupport.title")}:
                  </span>{" "}
                  {t("community.initiatives.livelihoodSupport.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("community.initiatives.infrastructureDevelopment.title")}:
                  </span>{" "}
                  {t("community.initiatives.infrastructureDevelopment.desc")}
                </li>
                <li>
                  <span className="font-semibold">
                    • {t("community.initiatives.culturalEngagement.title")}:
                  </span>{" "}
                  {t("community.initiatives.culturalEngagement.desc")}
                </li>
              </ul>

              {/* Impact */}
              <h3 className="mt-6 font-bold text-gray-900">
                {t("community.impactTitle")}:
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {t("community.impactDesc")}
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-[35%] w-full">
            <div className="border-2 border-[#FACC48] rounded-lg overflow-hidden">
              <Image
                src="/assets/sustainability/Community.png"
                alt={t("community.title")}
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
