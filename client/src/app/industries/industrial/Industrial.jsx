"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center"> Supporting Core Industrial Operations</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/Industrial1.png"
            alt=" Supporting Core Industrial Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
            Supporting Core Industrial Operations
          </h2>
          <p className="Paragraph">
           In diverse industrial applications, where machinery like pumps and valves operate continuously under varying loads, speeds, and often abrasive environments, effective friction management and the prevention of costly metal-to-metal wear are absolutely vital for maintaining peak performance and avoiding premature failure. Our products are specifically designed to excel in these demanding conditions, whether they are found in manufacturing plants, power generation facilities, critical material handling systems, or complex processing operations. By precisely optimizing friction and rigorously preventing wear, even amidst abrasive elements, our solutions significantly enhance overall efficiency, reduce energy consumption by minimizing resistance, and prolong the life of critical equipment such as high-pressure pumps and intricate valve assemblies. This enhanced durability and performance ultimately lead to substantial operational savings and increased reliability across the entire industrial infrastructure.

          </p>
        </div>
      </div>
    </div>
  );
}
