"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Supporting Innovation with Precision Engineering</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt="Supporting Innovation with Precision Engineering"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Supporting Innovation with Precision Engineering
          </h2>
          <p className="Paragraph">
           In the precision-driven hi-tech industry, where even microscopic friction and metal-to-metal contact can significantly impact performance, SAP parts provide advanced solutions for ultra-smooth operation and minimal wear. From semiconductor manufacturing to other sensitive and high-performance equipment, our components are designed with exacting tolerances to ensure the reliability, precision, and longevity of vital systems.

          </p>
        </div>
      </div>
    </div>
  );
}
