// components/ProductsUsed.tsx
"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  {
    label: {
      "en" : "Mechanical Face Seals",
      "ja" : "メカニカルフェイスシール"
    },
    src: "/assets/industries/Mechanical Face Seals4.jpg",
    highlight: false,
  },
  {
    label: {
      "en" : "Pump & Valves Components",
      "ja" : "ポンプおよびバルブ部品"
    },
    src: "/assets/industries/Bushings6.jpg",
    highlight: false,
  },
  {
    label: {
      "en" : "Precision Components",
      "ja" : "せいみつぶひん"
    },
    src: "/assets/industries/PrecisionComponents1.jpg",
    highlight: false,
  },
//   {
//     label: "SAP Hub Bearings",
//     src: "/assets/industries/agriculture/APU4.png",
//     highlight: false,
//   },
//   {
//     label: "Precision Components",
//     src: "/assets/industries/agriculture/APU5.png",
//     highlight: true,
//   },
];

export default function ProductsUsed() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || "en";
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3);

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">{t("Products Used")}</h2>

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
                alt={item.label[currentLang] || "product image"}
                width={180}
                height={140}
                className="object-contain w-[250px] h-[180px] border-2 border-[#FACC48] rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div
                className={`w-[180px] text-center py-2 px-1 bg-[#FACC48] mt-2 rounded-lg`}
              >
                <p
                  className={`text-sm font-semibold  text-[#363636]`}
                >
                 {item.label?.[currentLang] || item.label["en"]}
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
                alt={item.label[currentLang] || "product image"} 
                width={180}
                height={140}
                className="object-contain w-[250px] h-[180px] border-2 border-[#FACC48] rounded-xl transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div
                className={`w-[180px] text-center py-2 px-1 bg-[#FACC48] mt-2 rounded-lg`}
              >
                <p
                 className={`text-sm font-semibold  text-[#363636]`}
                >
                  {item.label?.[currentLang] || item.label["en"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
