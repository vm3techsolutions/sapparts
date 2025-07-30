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
        <h2 className="Heading block md:hidden text-center">Seals Assembly Guide</h2>

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2  sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Seals Assembly Guide
          </h2>
          <h3 className = "text-[#FACC48] text-2xl mb-4 font-bold ">Guidelines For Duo-Cone Seals Installation</h3>

          <h3 className = "text-[#000000] text-2xl mb-4 font-bold ">Mechanical Seal Design</h3>

          <p className="Paragraph">Mechanical Face Seals are fitted in Groove of retaining housing groove, to form the sealing at the adjoining faces. Metal faces are precision Lapped. The ramp angle of Seal and Housings are slightly different and form a wedge for the rubber ring to slide into and form a compressed profile giving load on the seals and making it intact.</p>

          <div>

           <h3 className = "text-2xl mb-4 font-bold sm:pt-10">Terminology:</h3> 
 
           <ul>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Seal Ring</li>
           <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Rubber Toric</li>
            <li className="flex items-start gap-2 pt-1"><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Housing Retainer</li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Housing Ramp</li>
  <div className="flex flex-wrap gap-8 sm:pl-10 pl-0 pt-2 pb-2">
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
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Seal Ring Housing</li>
            <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1" />Seal Ring Face</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Seal Ring Ramp</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Seal Ring Retaining Lip</li>
           <li className="flex items-start gap-2 pt-1" ><FaRegArrowAltCircleRight className="text-[16px] flex-shrink-0 mt-1"/>Installation Tool</li>
           </ul>
           </div>
           
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
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
