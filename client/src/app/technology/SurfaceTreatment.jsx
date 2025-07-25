"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SurfaceTreatment() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-[#F5F5F5] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        
        {/* Right Side - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            {t("Surface Treatment")}
          </h2>
          <Image
            src="/assets/technology/Surface1.png" // Place this image in public/assets/technology/
            alt="Surface Treatment Furnace"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Left Side - Text Description */}
        <div className="w-full md:w-1/2 space-y-4 text-md leading-6 ">
          <ul className="space-y-3">
            <li>
              <strong className="text-black text-lg">• {t("IPSEN – Sealed Quench Furnace – Heat treatment")}</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Carburizing")}</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Controlled Atmosphere")}</strong><br />
              <span className="text-sm text-gray-600">{t("Sealed Quench Furnace")}</span>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Nitriding")}</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Nitro-Carburizing")}</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Gas Nitriding")}</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Controlled Compound Diffusion Zone and White Layer")}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
