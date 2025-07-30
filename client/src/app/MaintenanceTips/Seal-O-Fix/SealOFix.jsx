"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function SealOFix() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Seal-O-Fix</h2>

         {/* Left Side - Text */}
        <div className="w-full mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Seal-O-Fix
          </h2>

          {/* Directions For Use: */}
          <div>
           <h3 className = "text-2xl  font-bold  mb-2">Directions For Use:</h3> 
           <ul>
            <li className="flex items-start gap-2 pt-1 " ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Before Cleansing the Sealing Surface, be sure that all surfaces are cool to touch.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" /> Do not apply in direct sunlight or if air temperature is above 100 F.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Use Eye Protection Glass and Face Mask while applying.</li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Apply SAP Seal-O-Fix-Spray on Housing Surface.</li>
             <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Immediately assemble Seal with Fixture Provided.</li>
              <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Do not Use any other Oil For Seal Fitment in Housings.</li>
           </ul>
           </div>

             {/* Storage: */}
          <div className="pt-10 ">
           <h3 className = "text-2xl  font-bold  mb-2  ">Storage</h3> 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>SAP Seal-O-Fix, shall be ideally stored in a cool, dry location in containers at a temperature between 8 and 49 C (46 and 120F).</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Optimal storage is at the lower end of this range.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Do not inhale.</li>
           </ul>
           </div>

             {/* Causion: */}
          <div className="pt-10 ">
           <h3 className = "text-2xl  font-bold  mb-2  ">Causion</h3> 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Flammable Composition.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Aerosol Can.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Do not spray on flame or hot surfaces.</li>
             <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Please store in cool place away from heat & sunlight.</li>
           </ul>
           </div>
           
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4 ">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[80vh] rounded   object-cover"
          />
        </div>
      </div>



    </div>
  );
}
