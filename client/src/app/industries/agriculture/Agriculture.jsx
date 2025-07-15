"use client";
import Image from "next/image";
import React from "react";

export default function AgricultureSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Left Side - Text */}
        <div className="flex-1">
          {/* Title: hidden on mobile (moved to top below) */}
          <h2 className="Heading hidden md:block">Agriculture</h2>
          
          <p className="Paragraph">

           Agricultural machinery operates in some of the most demanding environments imaginable, where heavy loads, abrasive conditions, and continuous operation lead to significant friction and damaging metal-to-metal contact between critical components. Our SAP Parts Products are specifically engineered to provide robust solutions for friction management and prevent damaging metal-to-metal contact, designed to withstand these challenges and safeguard vital components in tractors, harvesters, and implements. This specialized protection directly translates to increased uptime for machinery, lower maintenance costs due to reduced wear and tear, and ultimately, improved productivity for farmers by ensuring their equipment performs reliably and efficiently in the field.
          </p>
          <p className="Paragraph -mt-4">
           
          </p>
          <p className="Paragraph -mt-4">
           
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[320px] flex-shrink-0">
          {/* Title shown above image on mobile only */}
          <h2 className="Heading block md:hidden mb-4">Agriculture</h2>

          <Image
            src="/assets/industries/Agriculture.png"
            alt="Agriculture"
            width={300}
            height={370}
            className="w-full sm:h-[80vh] rounded shadow-md mt-0 md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
