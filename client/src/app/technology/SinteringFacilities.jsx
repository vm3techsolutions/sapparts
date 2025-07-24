"use client";
import Image from "next/image";
import React from "react";

export default function SinteringFacilities() {
  return (
    <div className="Section bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Right Side (Mobile First) - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            Sintering Facilities
          </h2>
          <Image
            src="/assets/technology/Sintering1.png" // Rename accordingly in public folder
            alt="Sintering Facilities"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Left Side - Description */}
        <div className="w-full md:w-1/2 space-y-6">
          <ul className="space-y-4 text-md leading-6 ">
            <li>
              <strong className="text-black text-lg">• Metal Powders Mixing</strong><br />
              Iron Based, Bronze Based, Copper Based
            </li>
            <li>
              <strong className="text-black text-lg">• Compaction Machines</strong><br />
              5T-40T, 60T-200T
            </li>
            <li>
              <strong className="text-black text-lg">• Compaction</strong><br />
              Multiple jobs in single stroke
            </li>
            <li>
              <strong className="text-black text-lg">• Sintering Furnace</strong><br />
              8 Inch mesh belt furnace 60kg/hr.
            </li>
            <li>
              <strong className="text-black text-lg">• Oil Impregnation</strong><br />
              Steam Furnace & oil impregnation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
