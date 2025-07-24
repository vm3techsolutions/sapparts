"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Powering Performance in Harsh Mining Environments</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/Mining1.png"
            alt="Powering Performance in Harsh Mining Environments"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Powering Performance in Harsh Mining Environments
          </h2>
          <p className="Paragraph">
            The mining industry operates under exceptionally extreme conditions, characterized by massive heavy loads, pervasive abrasive dust and slurries, and continuous, grueling operation, all of which demand superior solutions for friction control and the efficient metal-to-metal contact. Our SAP parts are specifically engineered for unparalleled durability and performance in essential mining machinery. This includes surface equipment like giant mining haul trucks and excavators, as well as specialized underground mining equipment such as load-haul-dump (LHD) machines, underground mining trucks, continuous miners, and drilling jumbos. By withstanding these incredibly harsh realities, our components ensure crucial operational continuity, significantly reduce costly breakdowns, and directly enhance safety in these challenging mining environments, contributing to consistent productivity and asset longevity.

          </p>
        </div>
      </div>
    </div>
  );
}
