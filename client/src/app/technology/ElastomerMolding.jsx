"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ElastomerMolding() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-20">
        
        {/* Left Side - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            {t("Elastomer Molding")}
          </h2>
          <Image
            src="/assets/technology/Elastomer1.png" // Make sure this image exists in public/assets/technology/
            alt="Elastomer Molding"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow  transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-md leading-6 ">
          <ul className="space-y-4">
            <li>
              <strong className="text-black text-lg">• {t("Extruding")}</strong><br />
              {t("O-ring extrusion from 45mm till 1.5 mtr")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Compression Molding")}</strong><br />
              {t("Till 1.5 mtr diameter")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("MDR")}</strong><br />
              {t("For checking rheological properties of elastomers")}.
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Inhouse Tooling & Die")}</strong><br />
              {t("Flash Less Die")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Peroxide Curing")}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
