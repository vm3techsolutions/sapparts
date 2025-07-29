"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function HousingPreparation() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        {/* <h3 className = "text-[#000000]">Housing Preparation:</h3>  */}

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">Housing Preparation:</h3>
          <p className="Paragraph">The housing components which contact the rubber toric rings (3 and 4 a) must be free from foreign parti-cles, etc before installing the seal. This should be done using a lint free wipe and a non-petroleum based solvent especially SAP Parts Seal-O-Fix Spray. <br/><br/>
          Dry with a clean wipe. Remove any foreign material from the rubber torics (2), the ramps (7) and the lips (8) of both seal rings.<br/><br/>
          Place the rubber torics on the metal seal ring at the bottom of the seal ring ramp and against the bottom of the seal ring ramp and against the, retaining lip.<br/><br/>
          Make Sure the O-Rings remain straight on the rim and not squeezed or twisted as it may lead to improper installation of the float seal.
          </p>
      
           
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4 space-y-8">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[25vh] rounded   object-cover"
          />
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[25vh] rounded   object-cover "
          />
        </div>

      </div>


{/* Approved Assembly Lubricants: */}

      <div className="flex flex-col md:flex-row sm:gap-8 items-start pt-10">
        {/* Mobile View - Title */}
    

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2 ">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">Approved Assembly Lubricants:</h3>
          <p className="Paragraph">SAP Parts - Seal-O-Fix Spray / Isopropyl Alcohol* Follow all the safety practices for handling volatile solvents. Do not use any other oil that leaves oil film or do not evaporates.
          </p>
      
           
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-full h-auto sm:h-[30vh] rounded   object-cover"
          />
        </div>
      </div>

    </div>
  );
}
