"use client";
import Image from "next/image";
import React from "react";

export default function AutomotiveSection() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row sm:gap-8 items-start">
        {/* Mobile View - Title */}
        <h2 className="Heading block md:hidden text-center">Supporting the Backbone of Mobility
</h2>

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 sm:p-4">
          <Image
            src="/assets/industries/Automotive1.png"
            alt="  Supporting the Backbone of Mobility"
            width={300}
            height={370}
            className="w-full h-auto sm:h-[70vh] rounded   object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 sm:mt-2">
          <h2 className="text-[#0E509E] text-4xl mb-4 font-bold hidden md:block">
           Supporting the Backbone of Mobility

          </h2>
          <p className="Paragraph">
           In the demanding automotive sector, our products are meticulously engineered to elevate both performance and longevity. We achieve this through the precise management of friction and a deep, in-depth application of tribology knowledge – the science of interacting surfaces in relative motion. 
Our solutions go beyond basic lubrication; they are designed to control wear, friction, and lubrication at a microscopic level. Our products ensure significantly smoother operation, drastically reduced wear and tear, and enhanced mechanical efficiency. Ultimately, this translates directly into the development of safer, more reliable, and higher-performing vehicles for both manufacturers and end-users alike.

          </p>
        </div>
      </div>
    </div>
  );
}
