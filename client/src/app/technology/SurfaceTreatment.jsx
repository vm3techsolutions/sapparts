"use client";
import Image from "next/image";
import React from "react";

export default function SurfaceTreatment() {
  return (
    <div className="Section bg-[#F5F5F5] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        
        {/* Right Side - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            Surface Treatment
          </h2>
          <Image
            src="/assets/technology/Surface1.png" // Place this image in public/assets/technology/
            alt="Surface Treatment Furnace"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Left Side - Text Description */}
        <div className="w-full md:w-1/2 space-y-4 text-md leading-6 ">
          <ul className="space-y-3">
            <li>
              <strong className="text-black text-lg">• IPSEN – Sealed Quench Furnace – Heat treatment</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• Carburizing</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• Controlled Atmosphere</strong><br />
              <span className="text-sm text-gray-600">Sealed Quench Furnace</span>
            </li>
            <li>
              <strong className="text-black text-lg">• Nitriding</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• Nitro-Carburizing</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• Gas Nitriding</strong>
            </li>
            <li>
              <strong className="text-black text-lg">• Controlled Compound Diffusion Zone and White Layer</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
