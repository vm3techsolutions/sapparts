"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function SealsAssemblyGuide() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Seal For Rotovator</h2>

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Seal For Rotovator
          </h2>
          <h3 className = "text-[#FACC48] text-xl mb-4 font-bold hidden md:block">Precision Engineered, High Quality & Heavy Duty Seals</h3>
          <h3 className = "text-[#FACC48] text-2xl mb-4 font-bold hidden md:block">SAP Parts Heavy Duty Seals are manufactured in the state of the art facility.</h3>

          <div>
           <h3 className = "text-2xl mb-4 font-bold hidden md:block pt-10">Quality Assurance:</h3> 
 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Speciality Quality Instrumentation.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Surface Roughness Testing.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Hardness Testing.</li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Microscopic Image Analyzing.</li>
             <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Surface Finish Testing. </li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Seal Flatness Testing.</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Oil Leakage Testing.</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Endurance Testing & Validation.</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Accelerated Seal life Test Rig.</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Seal Face Load estimation M/c.</li>
  <div className="flex flex-wrap gap-8 sm:pl-10 pt-2 pb-2">
  <Image
    src="/assets/industries/agriculture/Supporting.png"
    alt="Supporting the Backbone of Farming Operations"
    width={300}
    height={370}
    className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
  />
  <Image
    src="/assets/industries/agriculture/Supporting.png"
    alt="Supporting the Backbone of Farming Operations"
    width={300}
    height={370}
    className="w-full sm:w-[45%] h-auto sm:h-[15vh] rounded object-cover"
  />
</div>
          </ul>
           </div>

           <hr className="text-[#d9d9d9]"/>

             <div>
           <h3 className = "text-2xl mb-4 font-bold hidden md:block pt-5">Mechanical Face Seal Features:</h3> 
 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Corrosion Resistant.</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Precision lapped Rings.</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Minimum face load variations.</li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Special Seal and O - ring materials.</li>
             <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Long Life - Warranted. </li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" /> Self-renewing sealing surfaces.</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/> Heavy Duty Applications.</li>
           </ul>
           </div>
           
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4 mt-4">
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[40vh] rounded   object-cover"
          />
        </div>
      </div>



    </div>
  );
}
