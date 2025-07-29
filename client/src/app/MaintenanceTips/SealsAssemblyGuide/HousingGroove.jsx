"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function HousingGrrove() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start pb-20">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Installation of Seal inside the Housing Groove:</h2>

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">Installation of Seal inside the Housing Groove:</h3>

          <h3 className="pt-1">1. For installation of Seal, arrange a cleaned Seal & cleaned, wiped housing. Put the Seal on the Housing</h3>
          <h3 className="pt-1">2. Hold the O-Ring in the Fixture and form the tool guide assembly as explained above.</h3>
          <h3 className="pt-1">3. Hold the Seal and O-Ring Firmly and see O-Ring is not twisted. Locate the seal & tool on groove opening.</h3>
          <h3 className="pt-1">4. Press the fixture with even load on the Guide Plate, and experience the O-Ring insertion jerk, inside the housing.</h3>
          <p className="Paragraph">Small Rings can be manually fixed, for big rings apply even and gentle pressure around the rim of guide plate using wooden mallet.</p>
           </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-full h-auto sm:h-[45vh] rounded   object-cover"
          />
        </div>
      </div>

{/* New Section */}

<div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center pt-10">Installation of Seal inside the Housing Groove:</h2>

         {/* Left Side - Text */}
        <div className="w-full mt-6 sm:mt-2">
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Never use Rubber O–Rings with Blow holes/ damages.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Never allow Sealing surface be dirty, it should be cleaned well before Assembly.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Never try hammering on sealing surface and never use sharp tools to locate O-Rings.</li>

           </ul>
           </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[16vh] rounded   object-cover"
          />
        </div>
      </div>

      {/* New Section */}

<div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center pt-10">Installation of Seal inside the Housing Groove:</h2>

         {/* Left Side - Text */}
        <div className="w-full mt-6 sm:mt-2">
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Clean the Sealing Surface thoroughly before installation.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Use Seal–O-Fix Spray.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Check for Sealing edge free from dust, dirt, hair, etc.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Always use only lint free Wipes/Cloths, Never use tissue Paper or cotton waste.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> While completing the final assembly of the unit, make sure that both seals are in correct housings together. </li>
             <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> While completing the final assembly of the unit, make sure that both seals are in correct housings together. High impact can scratch or break the seal components.</li>
           

           </ul>
           </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 sm:p-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[30vh] rounded   object-cover"
          />
        </div>
      </div>


    </div>
  );
}
