"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MachiningGrinding() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-white px-6 py-12 md:py-20">
      <h2 className="Heading">{t("Machining & Grinding")}</h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start sm:gap-20 gap-10">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Top Large Image */}
          <div className="w-full">
            <Image
              src="/assets/technology/Machining1.png" // Replace with correct image name
              alt="Ring Rolling Forging"
              width={800}
              height={500}
              className="w-full sm:h-[65vh] rounded shadow  transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Bottom Two Small Images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image
                src="/assets/technology/Machining2.png"
                alt="Machining Equipment"
                width={400}
                height={300}
                className="w-full h-60 rounded shadow  transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/assets/technology/Machining3.png"
                alt="Grinding Machine"
                width={400}
                height={300}
                className="w-full h-60 rounded shadow  transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          
          <ul className="space-y-4 text-md  leading-6">
            <li>
              <strong className="text-black text-lg">• {t("Ring Rolling Forging")}</strong><br />
              {t("Alloy Steel rings made from ring rolling process")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Machining")}</strong><br />
              {t("CNC Machines VTL")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Heat Treatment")}</strong><br />
              {t("In-house Sealed quench Furnace by Ipsen Germany")}:<br />
              <span className="ml-4 block">• {t("Case Carburizing")}</span>
              <span className="ml-4 block">• {t("Nitriding")}</span>
              <span className="ml-4 block">• {t("Through Hardening")}</span>
              <span className="ml-4 block">• {t("Carbo Nitriding")}</span>
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Grinding")}</strong><br />
              {t("OD grinding machine Max OD - 200 mm")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Bore Grinding")}</strong><br />
              {t("In-house bore grinding machine Max ID – 170 mm")}
            </li>
            <li>
              <strong className="text-black text-lg">• {t("Surface Treatments")}</strong><br />
              {t("Wear Resistant coating")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
