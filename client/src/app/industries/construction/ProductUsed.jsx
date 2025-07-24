// components/ProductsUsed.tsx
"use client";
import Image from "next/image";
import React from "react";

const products = [
  {
    label: "Mechanical Face Seals",
    src: "/assets/industries/Mechanical Face Seals2.jpg",
    highlight: false,
  },
  {
    label: "Bushings",
    src: "/assets/industries/Bushings2.jpg",
    highlight: false,
  },
  {
    label: "Sintered Products",
    src: "/assets/industries/SinteredProducts2.jpg",
    highlight: false,
  },
  {
    label: "Precision Components",
    src: "/assets/industries/PrecisionComponents1.jpg",
    highlight: false,
  },
//   {
//     label: "Precision Components",
//     src: "/assets/industries/agriculture/APU5.png",
//     highlight: true,
//   },
];

export default function ProductsUsed() {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3);

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">Products Used</h2>

      <div className="flex flex-col items-center sm:gap-y-16 gap-y-10   mt-8">
        {/* First Row - 3 items */}
        <div className="flex justify-center flex-wrap sm:gap-x-40 gap-y-10">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[250px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={180}
                height={140}
                className="object-contain w-[250px] h-[180px] border-2 border-[#FACC48] rounded-xl"
              />
              <div
                className={`w-[180px] text-center py-2 px-1 bg-[#FACC48] mt-2 rounded-lg`}
              >
                <p
                  className={`text-sm font-semibold  text-[#363636]`}
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
              className="flex flex-col items-center w-[250px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={180}
                height={140}
                className="object-contain w-[250px] h-[180px] border-2 border-[#FACC48] rounded-xl"
              />
              <div
                className={`w-[180px] text-center py-2 px-1 bg-[#FACC48] mt-2 rounded-lg`}
              >
                <p
                 className={`text-sm font-semibold  text-[#363636]`}
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
