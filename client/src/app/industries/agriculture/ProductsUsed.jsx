// components/ProductsUsed.tsx
"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    label: "Mechanical Face Seals",
    src: "/assets/industries/ProductsUsed1.png",
    highlight: false,
  },
  {
    label: "Bushings",
    src: "/assets/industries/ProductsUsed2.png",
    highlight: false,
  },
  {
    label: "Sintered Products",
    src: "/assets/industries/ProductsUsed3.png",
    highlight: false,
  },
  {
    label: "SAP Hub Bearings",
    src: "/assets/industries/ProductsUsed4.png",
    highlight: false,
  },
  {
    label: "Precision Components",
    src: "/assets/industries/ProductsUsed5.png",
    highlight: true,
  },
];

export default function ProductsUsed() {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3);

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">Products Used</h2>

      <div className="flex flex-col items-center sm:gap-y-28  mt-8">
        {/* First Row - 3 items */}
        <div className="flex justify-center flex-wrap sm:gap-x-40 gap-y-10">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[180px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={180}
                height={140}
                className="object-contain w-[180px] h-[140px] border-t border-r border-l border-[#FACC48] rounded-md"
              />
              <div
                className={`w-[180px] text-center rounded-b-full pt-2 pb-3 px-2 ${
                  item.highlight ? "bg-[#FACC48]" : "bg-[#0E509E]"
                }`}
              >
                <p
                  className={`text-[15px] font-medium ${
                    item.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 items */}
        <div className="flex justify-center flex-wrap sm:gap-x-40 gap-y-10">
          {secondRow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[180px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={180}
                height={140}
                className="object-contain w-[180px] h-[140px] border-t border-r border-l border-[#FACC48] rounded-md"
              />
              <div
                className={`w-[180px] text-center rounded-b-full pt-2 pb-3 px-2 ${
                  item.highlight ? "bg-[#FACC48]" : "bg-[#0E509E]"
                }`}
              >
                <p
                  className={`text-[15px] font-medium ${
                    item.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
