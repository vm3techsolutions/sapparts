"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center"> Engineered for Extreme Demands
</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Engineered for Extreme Demands"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            Engineered for Extreme Demands

          </h2>
          <p className="Paragraph">
           Construction equipment operates in exceptionally demanding environments, where heavy loads, constant motion, and exposure to abrasive materials pose immense challenges. In such conditions, effective friction management and the effective management of metal-to-metal contact are absolutely crucial for operational integrity. Our products are specifically developed to endure these harsh realities, significantly extending the lifespan of vital machinery like excavators, bulldozers, and cranes. This enhanced durability directly translates to minimized downtime for construction projects and ultimately maximizes overall project efficiency.

          </p>
        </div>
      </div>
    </div>
  );
}
