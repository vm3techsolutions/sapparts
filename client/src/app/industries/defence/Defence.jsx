"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center"> Engineered for Critical Missions</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/Defence1.png"
            alt=" Engineered for Critical Missions"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            Engineered for Critical Missions
          </h2>
          <p className="Paragraph">
            In the critical defence industry, where reliability and operational integrity are absolutely paramount, our SAP Parts Products are engineered to control friction. We understand that specialized vehicles, weapon systems, and support equipment demand components that perform flawlessly under extreme stress and diverse conditions. By safeguarding these vital defence assets, our products ensure their readiness and effectiveness, directly contributing to mission success.

          </p>
        </div>
      </div>
    </div>
  );
}
