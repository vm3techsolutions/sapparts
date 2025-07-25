"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function RoboticCasting() {
  const {t} = useTranslation()
  return (
    <div className="Section bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center sm:gap-20 gap-10">
        
        {/* Left Side - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            {t("Robotic Casting")}
          </h2>
          <Image
            src="/assets/technology/Robotic1.png" // Save the image with this name
            alt="Robotic Casting"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-md leading-6 ">
          <ul className="space-y-4">
            <li>
              <strong className="text-black">• {t("Robotic Near Net Shape Centrifugal Castings")}</strong>
            </li>
            <li>
              <strong className="text-black">• {t("Robotic Near–Net Shape vertical Centrifugal Castings Process")}</strong>
            </li>
            <li>
              <strong className="text-black">• {t("Controlled Solidification with Thermal Analyzers")}</strong>
            </li>
            <li>
              <strong className="text-black">• {t("Proprietary alloy Cast Iron Materials")}</strong>
            </li>
            <li>
              <strong className="text-black">• {t("High Productivity Robotic Pouring and Automatic Inoculation")}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
