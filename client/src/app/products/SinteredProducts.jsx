"use client";
import Image from "next/image";
import React from "react";

export default function SinteredProducts() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-7xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-2 md:order-1">
          {/* Mobile Title */}
          <h2 className="Heading mb-4 block md:hidden text-center">Sintered Products</h2>

          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/SinteredProducts.png"
              alt="Sintered Products"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          {/* Desktop Title */}
          <h2 className="Heading hidden md:block">Sintered Products</h2>

          <p className="font-semibold mb-1 mt-2">Powder Metallurgy Sintered Parts</p>

          <div className="mb-3">
            <p className="font-semibold">Materials :</p>
            <p className="text-md text-[#000000] ml-8">
              Iron Powders :
              <br /> 1. Iron Base Metal Powders
              <br /> 2. Bronze Base Metal Powders
              <br /> 3. Copper Base Metal Powders
            </p>
          </div>

          <div className="mb-3">
            <p className="font-semibold">Specifications :</p>
            <p className="text-md text-[#000000] ml-8">
              1. OD : 85 mm <br />
              2. Lengths : 90 mm <br />
              3. Weight : 1000 gm (max)
            </p>
          </div>

          <div>
            <p className="font-semibold">Applications :</p>
            {/* Add actual application data here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
