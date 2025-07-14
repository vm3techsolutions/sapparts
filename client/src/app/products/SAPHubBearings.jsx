"use client";
import Image from "next/image";
import React from "react";

export default function SAPHubBearings() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto">
        {/* Left Image with Mobile Title */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-2 md:order-1">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">SAP Hub Bearings</h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/SAPHubBearings.png"
              alt="SAP Hub Bearings"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          {/* Desktop Title */}
          <h2 className="Heading hidden md:block">SAP Hub Bearings</h2>

          <div className="mb-3">
            <p className="font-semibold mt-2">Materials :</p>
            <p className="text-md text-[#000000]">Lorem Ipsum</p>
          </div>

          <p className="text-md text-[#000000] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
          </p>

          <p className="text-md text-[#000000] mb-3">Lorem ipsum dolor sit amet,</p>

          <p className="text-md text-[#000000] mb-3">
            <span className="font-semibold">Sizes :</span> Lorem ipsum dolor sit amet,
          </p>

          <p className="text-md text-[#000000]">
            <span className="font-semibold">Applications :</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
          </p>
        </div>
      </div>
    </div>
  );
}
