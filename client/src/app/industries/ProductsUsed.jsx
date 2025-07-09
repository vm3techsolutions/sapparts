// components/ProductsUsed.tsx
"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    label: "Special Bearings",
    src: "/assets/industries/ProductsUsed1.png", 
    highlight: false,
  },
  {
    label: "Agri Hubs",
    src: "/assets/industries/ProductsUsed2.png", 
    highlight: false,
  },
  {
    label: "Precision Components",
    src: "/assets/industries/ProductsUsed3.png", 
    highlight: true,
  },
  {
    label: "Semiconductor Aggregates",
    src: "/assets/industries/ProductsUsed4.png", 
    highlight: false,
  },
];

export default function ProductsUsed() {
  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">
        Products Used
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[160px] sm:w-[180px] mx-auto"
          >
            <div className="">
              <Image
                src={item.src}
                alt={item.label}
                width={160}
                height={150}
                className="object-contain w-[30vh] h-[20vh] border-t border-r border-l border-[#FACC48] rounded-md"
              />

              {/* Label box (without year) */}
              <div
                className={`w-[30vh] text-center rounded-b-full pt-2 pb-3 px-2 ${
                  item.highlight ? "bg-[#FACC48]" : "bg-[#0E509E]"
                }`}
              >
                <p
                  className={`text-md font-medium ${
                    item.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
