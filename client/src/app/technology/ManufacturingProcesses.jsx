"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ManufacturingProcesses() {
  const{t} = useTranslation()
  return (
    <div className="Section bg-white">
      <h2 className="Heading">{t("Manufacturing Processes")}</h2>
      <div className="flex flex-col lg:flex-row sm:gap-20  gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
          {/* Top Image */}
          <div className="w-full">
            <Image
              src="/assets/technology/Manufacturing1.png"
              alt="Manufacturing Image 1"
              width={800}
              height={600}
              className="w-full sm:h-[65vh] rounded shadow"
            />
          </div>
          {/* Bottom Images in a row */}
          <div className="flex gap-4">
            <Image
              src="/assets/technology/Manufacturing2.png"
              alt="Manufacturing Image 2"
              width={400}
              height={300}
              className="w-1/2 h-auto rounded shadow"
            />
            <Image
              src="/assets/technology/Manufacturing3.png"
              alt="Manufacturing Image 3"
              width={400}
              height={300}
              className="w-1/2 h-auto rounded shadow"
            />
          </div>
        </div>

        {/* Right Side - Text */}
       <div className="w-full lg:w-1/2 text-md  leading-6">
  <ul className="space-y-3">
    <li>
      <strong className="text-black text-xl">• {t("Centrifugal Casting")}</strong><br />
      <span>{t("Ni-Hard Cast Alloy Steel, White Cast Iron")}</span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Compression Rubber Molding")}</strong><br />
      <span>{t("NBR, HNBR, NBR-LT, FKM, Silicon")}</span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Precision Lapping")}</strong><br />
      <span>
        {t("Spherical, Flat, Finish Surface Lapping, Polishing")},<br />
        {t("Ultrasonic Washing & Cleaning")}
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Precision Machining")}</strong><br />
      <span>
        {t("CNC Machining Centre")} {"<"} 400 {t("mm Dia.")}<br />
        {t("VTL Machining Centre")} {"<"} 1500 {t("mm Dia.")}
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Precision Grinding")}</strong><br />
      <span>
        {t("Centerless, Bore, Surface Grinding")} {"<"} 300 {t("mm Dia.")}<br />
        {t("Proprietary Tool holding devices")}.
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Heat Treatment")}</strong><br />
      <span>
        {t("Hardening Tempering - Cryogenic Treatment")}.<br />
        {t("Induction Hardening, Carburizing, Gas Nitrating, Laser")}<br />
        {t("Treatment, Plug Quenching")}
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Surface Treatments")}</strong><br />
      <span>
        {t("Shot Blasting, Amorphous Phosphating, CED Coating")},<br />
        {t("MOS2 Coating, WS2 Coating, Zn Passivation")}.
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Powder Metallurgy")}</strong><br />
      <span>{t("Sintering Process, Oil Impregnation, Steam Oxidation")}</span>
    </li>
    <li>
      <strong className="text-black text-xl">• {t("Automatic Assembly")}</strong><br />
      <span>{t("Product Assembly & Clean Packaging Line Laser Marking System")}</span>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}
