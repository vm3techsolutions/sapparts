"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ManufacturingPlantsSection() {
  const {t} = useTranslation();
  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center">{t("Manufacturing Plants")}</h2>

      {/* Cards & Map */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 sm:gap-0 mt-12">
        
        {/* Left Card */}
        <div className="w-full max-w-sm bg-white rounded-md shadow-md p-4 z-10">
          <Image
            src="/assets/about/Manufacturing1.png"
            alt="Pune Plant"
            width={400}
            height={250}
            className="rounded-md mb-3 object-cover w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <p><span className="font-bold">{t("Location")}</span>: {t("Pune")}</p>
          <p><span className="font-bold">{t("Products")}</span>: {t("Mechanical Face Seals & PM Sintered Parts")}</p>
          <p><span className="font-bold">{t("Key Processes")}</span>: {t("Centrifugal Casting, Machining, Lapping, Elastomer Molding")}</p>
          <p><span className="font-bold">Facility</span>: {t("Area: 2.5 Acres")}<br />{t("Built-up: 80,000 Sqft.")}</p>
        </div>

        {/* Map (centered and responsive) */}
        <div className="relative z-0 opacity-80 w-[250px] md:w-[300px] lg:w-[400px]">
          <Image
            src="/assets/about/Manufacturing2.png"
            alt="India Map"
            width={400}
            height={320}
            className="w-full h-auto mx-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Right Card */}
        <div className="w-full max-w-sm bg-white rounded-md shadow-md p-4 z-10">
          <Image
            src="/assets/about/Manufacturing3.png"
            alt="Solapur Plant"
            width={400}
            height={250}
            className="rounded-md mb-3 object-cover w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <p><span className="font-bold">{t("Location")}</span>: {t("Solapur")}</p>
          <p><span className="font-bold">{t("Products")}</span>: {t("Agri Hubs, Bushings, Precision Parts")}</p>
          <p><span className="font-bold">{t("Key Processes")}</span>:{t("SQF-nitriding, Carburizing, Grinding, Machining")}</p>
          <p><span className="font-bold">{t("Facility")}</span>: {t("Area: 65 Acres")}<br />{t("Built-up: 100,000 Sqft.")}</p>
        </div>
      </div>
    </div>
  );
}
