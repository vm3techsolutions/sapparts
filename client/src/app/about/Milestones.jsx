"use client";
import React from "react";

const timelineData = [
  { year: "2009", label: "Established" },
  { year: "2011", label: "ISO: 9001-2008" },
  { year: "2012", label: "INDIAN OEM Business" },
  { year: "2014", label: "Seal Technology Centre" },
  { year: "2015", label: "SAP Parts Europe Gmbh. Germany" },
  { year: "2016", label: "North Factory America Distribution Grizzly Seals" },
  { year: "2017", label: "INDIA Defence Excellence Award" },
  { year: "2018", label: "Construction of New Factory" },
  { year: "2019", label: "Centrifugal Casting Foundry" },
  { year: "2021", label: "Innovation Award from M&M" },
  { year: "2022", label: "Sintered (PM)Parts" },
  { year: "2023", label: "Quality Award M&M" },
  { year: "2023", label: "Patent PTO Seal" },
  { year: "2024", label: "Bushings & Bearings" },
];

export default function Timeline() {
  return (
    <div className="py-12">
      <div className="relative w-full h-1 bg-blue-600" />
      <div className="flex flex-wrap justify-center gap-8 px-4 mt-4 relative">
        {timelineData.map((item, index) => {
          const isTop = index % 2 === 0;

          return (
            <div key={index} className="relative w-48">
              {/* Vertical Line */}
              <div
                className={`absolute left-1/2 w-1 bg-blue-600 ${
                  isTop ? "bottom-full" : "top-full"
                } h-16 -translate-x-1/2`}
              />

              {/* Yellow Box */}
              <div
                className={`bg-yellow-400 text-center text-sm font-medium text-black px-4 py-3 rounded shadow-lg w-full ${
                  isTop ? "mb-20" : "mt-20"
                }`}
              >
                <p className="font-bold">{item.year}</p>
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
