"use client";
import Image from "next/image";
import React from "react";

export default function BushingsSection() {
  return (
    <div className="Section bg-white">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 order-3 md:order-1">
          {/* Desktop Title */}
          <h2 className="Heading mb-4 hidden md:block">Bushings</h2>

          {/* Alloy Steel Bushings */}
          <div className="flex items-start mb-2">
            <span className="font-semibold w-48">Alloy Steel Bushings :</span>
            <span className="text-md text-[#000000]">Carburizing and Nitriding</span>
          </div>

          <div className="flex items-start mb-3">
            <span className="font-semibold w-48">Materials :</span>
            <span className="text-md text-[#000000]">100Cr6, 20MnCr5, C-45, 4140</span>
          </div>

          {/* Non-Ferrous Bushings */}
          <div className="flex items-start mb-3">
            <span className="font-semibold w-48">Non-Ferrous Bushings :</span>
            <span className="text-md text-[#000000]">Sintering and CentriCast</span>
          </div>

          <div className="flex items-start mb-3">
            <span className="font-semibold w-48">Materials :</span>
            <span className="text-md text-[#000000]">C93200, SAE660</span>
          </div>

          <div className="flex items-start mb-4">
            <span className="font-semibold w-48">Spinodal Alloy :</span>
            <span className="text-md text-[#000000]">Nickel-Tin-Cu Alloy</span>
          </div>

          {/* Applications */}
          <div className="flex items-start">
            <span className="font-semibold w-48">Applications :</span>
            <span className="text-md text-[#000000]">
              1. Excavators, Backhoe Loaders : Boom Arm and Bucket Link Joints <br />
              2. Tractor and Agriculture Equiped Axles : Center Sleeve and King Pins <br />
              3. Hydraulic Cylinder : Tail and Eye End <br />
              4. Reach Stackers : Pivot Joints
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-2 md:order-2">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">Bushings</h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/Bushings.png"
              alt="Bushings Product"
              width={400}
              height={400}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
