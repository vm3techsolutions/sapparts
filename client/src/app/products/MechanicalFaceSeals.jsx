"use client";
import Image from "next/image";
import React from "react";

export default function MechanicalFaceSeals() {
  return (
    <div className="Section bg-white">
      {/* Top Description */}
      <p className="Paragraph text-center md:px-32">
        We are a Manufacturer, Designer and Supplier of technologically enriched and specially
        designed Mechanical Face Seal / Floating Seals and Special surface treated Products for
        Construction, Mining, Defence, Tranmdission, and Agriculture Equipments.
      </p>

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row items-start max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center  order-2 md:order-1 mt-6 md:mt-0">
          {/* Heading visible only on mobile (above image) */}
          <h2 className="Heading mb-4 block md:hidden text-center">Mechanical Face Seals</h2>
          
          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/MechanicalFaceSeals.png"
              alt="Mechanical Face Seal"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          {/* Heading only for desktop */}
          <h2 className="Heading hidden md:block">Mechanical Face Seals</h2>

          <p className="font-semibold text-2xl mb-2 mt-2">Materials :</p>
          <p>
            <strong className="font-semibold">Metal Faces</strong> : Centrifugal Castings <br />
            <span className="mt-2 block">
              <strong className="font-semibold">Proprietary Materials</strong> : <br />
              1. High Chrome - Molly Alloy Cast Iron (JaLikayas) <br />
              2. Ni - Hard Alloy Cast Iron (KrSnyas)
            </span>
          </p>

          <p className="mt-2 font-semibold">Elastomers :</p>
          <p className="text-md text-[#000000]">NBR, NBR-LT, HNBR, FKM, Silicone</p>

          <p className="mt-3 font-semibold">Sizes :</p>
          <p className="text-md text-[#000000]">Outside Diameter : From 30mm to 1500mm</p>

          <p className="mt-3 font-semibold">Applications :</p>
          <p className="text-md text-[#000000]">
            Excavator, Military Tanks, Tunnel Boring Machine (TBM), Hydraulic Motor or Pump, Track
            Chain, Bulldozer, Tractor, Combine Harvester
          </p>
        </div>
      </div>
    </div>
  );
}
