"use client";
import Image from "next/image";
import React from "react";

export default function CentrifugalCasting() {
  return (
    <div className="Section bg-[#F5F5F5] px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center  gap-10">
        
        {/* Right Side (Mobile First) - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            Centrifugal Casting
          </h2>
          <Image
            src="/assets/technology/Centrifugal1.png"
            alt="Centrifugal Casting"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Left Side - Description */}
        <div className="w-full md:w-1/2  space-y-6">
          <ul className="space-y-4 text-md leading-6">
            <li>
              <strong className="text-black text-xl">• Centricast</strong><br />
              Robotic Centrifugal Casting - Alloy Cast Iron
            </li>
            <li>
              <strong className="text-black text-xl">• Centrifugal Casting</strong><br />
              Ni-Hard &amp; High Chrome Alloy White Cast Iron
            </li>
            <li>
              <strong className="text-black text-xl">• Precision Machining</strong><br />
              CNC Machining &lt; 400 mm Dia.<br />
              VTL Machining &lt; 1500 mm Dia.
            </li>
            <li>
              <strong className="text-black text-xl">• Heat Treatment</strong><br />
              Cryogenic (Sub-Zero Temp.) Liquid Nitrogen treatment<br />
              Destabilization of Castings<br />
              Induction Hardening
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
