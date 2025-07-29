"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function SapPartsSealInstallationTool() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white ">
      <div>
        {/* Mobile View - Title */}
      
         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">SAP Parts Seal Installation Tool:</h3>
          <p className="Paragraph">Below is how the Seal installation tool looks like. It consists of a circular bracket type polyamide ring with steel clamping arrangement and check nut, that holds the seal with O-Ring in the special groove made at the face of bracket ring and pushes the O–ring in the housing groove.
          </p>
        </div>

      </div>


{/* Approved Assembly Lubricants: */}

      <div className="flex flex-col md:flex-row sm:gap-8 items-start pt-10">
        {/* Mobile View - Title */}
    

         {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2 ">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">Duo Cone Seal Installation Process:</h3>
          <p className="Paragraph">It is always recommended the Duo Cone / Metal Face Float Seals must be installed using proper Installation Tool only.
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

{/* Steps By Step Seal Installation: */}
        <div >
        {/* Mobile View - Title */}
    

         {/* Left Side - Text */}
        <div className="w-full  mt-6 sm:mt-2 pt-10">
          <h3 className = "text-[#000000] text-2xl mb-4 font-bold hidden md:block">Steps By Step Seal Installation:</h3>
          <h3 className="pt-5">1. Arrange Right Duo cone Seal, Installation Tool, Seal-O-Fix Spray, Mallet, Lint Free Cloth, etc. as shown below before starting actual seal installation in the housing cavity.</h3>
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"/>
        </div>

         <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">2. Check you are using appropriate tool part number and design provided by SAP Parts for the Seal. Note:- Each seal has different Tool. Check Seal face, O-Ring & housings are clean and free from any mechanical damage, dent etc.</h3>
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"/>
        </div>

         <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">3. Apply Seal-O-Fix on Seal face and clean the Seal using Lint Free Wipe. Ensure the seal face be thoroughly cleaned and no fine particles of dust should remain on it.</h3>
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"/>
        </div>

        <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">4. Put the O-Ring on the Seal Ramp and check it is properly sleeved, Check there is no skewing or twisting of O-Ring.</h3>
          </div>

        <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">5. Hold the O-Ring on the Seal Ramp and engage the Lip of the tool between the gap of O-Ring and seal face inside the circular guide way groove of the Tool.</h3>
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"/>
        </div>

        <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">6. Bring the edges of clamp close to each other and tighten the check nut provided on tool so as to hold the seal firmly in the clamp formed.</h3>
          <Image
            src="/assets/industries/agriculture/Supporting.png"
            alt=" Supporting the Backbone of Farming Operations"
            width={200}
            height={270}
            className="w-[200px] h-auto sm:h-[15vh] rounded object-cover pt-5"/>
        </div>

        <div className="w-full  mt-6 sm:mt-2 ">
          <h3 className="pt-5">7. This makes the Seal Guided in the Install Tool.</h3>
        </div>

      </div>



    </div>
  );
}
