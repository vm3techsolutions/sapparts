"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Automotive</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-6">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Automotive"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-0">
          <h2 className="Heading hidden md:block">
            Supporting the Backbone of Farming Operations
          </h2>
          <p className="Paragraph">
            Agricultural machinery operates in some of the most demanding
            environments imaginable, where heavy loads, abrasive conditions, and
            continuous operation lead to significant friction and damaging
            metal-to-metal contact between critical components. Our SAP Parts
            Products are specifically engineered to provide robust solutions for
            friction management and prevent damaging metal-to-metal contact,
            designed to withstand these challenges and safeguard vital components
            in tractors, harvesters, and implements. This specialized protection
            directly translates to increased uptime for machinery, lower
            maintenance costs due to reduced wear and tear, and ultimately,
            improved productivity for farmers by ensuring their equipment performs
            reliably and efficiently in the field.
          </p>
        </div>
      </div>
    </div>
  );
}
