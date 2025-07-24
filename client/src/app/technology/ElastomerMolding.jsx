"use client";
import Image from "next/image";
import React from "react";

export default function ElastomerMolding() {
  return (
    <div className="Section bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-20">
        
        {/* Left Side - Title + Image */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading">
            Elastomer Molding
          </h2>
          <Image
            src="/assets/technology/Elastomer1.png" // Make sure this image exists in public/assets/technology/
            alt="Elastomer Molding"
            width={800}
            height={500}
            className="w-full sm:h-[65vh] rounded shadow"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-md leading-6 ">
          <ul className="space-y-4">
            <li>
              <strong className="text-black text-lg">• Extruding</strong><br />
              O-ring extrusion from 45mm till 1.5 mtr
            </li>
            <li>
              <strong className="text-black text-lg">• Compression Molding</strong><br />
              Till 1.5 mtr diameter
            </li>
            <li>
              <strong className="text-black text-lg">• MDR</strong><br />
              For checking rheological properties of elastomers.
            </li>
            <li>
              <strong className="text-black text-lg">• Inhouse Tooling & Die</strong><br />
              Flash Less Die
            </li>
            <li>
              <strong className="text-black text-lg">• Peroxide Curing</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
