"use client";
import React from "react";

export default function SealFeatureSection() {
  return (
    
    <section className="Section bg-white">
      <div className="">
        {/* Title */}
        <h2 className="Heading text-center">
          Precision–Engineered for Harsh Operating Conditions
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10  text-gray-700">
          {/* Left Side Paragraph */}
          <div className="Paragraph ">
            <p>
              Mechanical Face Seals, also known as heavy-duty seals or lifetime
              seals, are two-piece sealing solutions specifically designed to
              withstand extreme wear, high pressure, and contaminated
              environments. Widely used in off-highway, construction, and
              mining machinery, SAP’s seals ensure maximum uptime and minimal
              maintenance.
            </p>
          </div>

          {/* Right Side List */}
          <div className="Paragraph ">
            <p>1) Dual-component design with elastomeric or metal-to-metal sealing</p>
            <p>2) Withstands abrasive, muddy, and underwater conditions</p>
            <p>3) Proven performance in harsh industrial and mobile applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
