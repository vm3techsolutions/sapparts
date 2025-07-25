"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SinteredProducts() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-7xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-2 md:order-1">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">{t("Sintered Products")}</h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/SinteredProducts.png"
              alt="Sintered Products"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          {/* Desktop Title */}
          <h2 className="Heading hidden md:block">{t("Sintered Products")}</h2>

          <p className="font-semibold mb-1 mt-2">{t("Powder Metallurgy Sintered Parts")}</p>

          <div className="mb-3">
            <p className="font-semibold">{t("Materials")} :</p>
            <p className="text-md text-[#000000] ml-8">
              {t("Iron Powders")} :
              <br /> 1. {t("Iron Base Metal Powders")}
              <br /> 2. {t("Bronze Base Metal Powders")}
              <br /> 3. {t("Copper Base Metal Powders")}
            </p>
          </div>

          <div className="mb-3">
            <p className="font-semibold">{t("Specifications")} :</p>
            <p className="text-md text-[#000000] ml-8">
              1. {t("OD : 85 mm")} <br />
              2. {t("Lengths : 90 mm")} <br />
              3. {t("Weight : 1000 gm (max)")}
            </p>
          </div>

          <div>
            <p className="font-semibold">{t("Applications")} :</p>
            {/* Add actual application data here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
