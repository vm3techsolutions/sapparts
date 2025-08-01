// components/ProductOverview.js
import Image from "next/image";
import React from "react";

export default function ProductOverview() {
  return (
    <section className="Section bg-white ">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6 ">
          <div className="border-[3px] border-dashed border-yellow-400 p- ">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/products/ProductOverview.png" 
                alt="Bushings"
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0">
          <h2 className="Heading">
            Product Overview
          </h2>
          <p className="Paragraph">
            High-Performance Steel & Non-Ferrous Bushings<br />
            Precision-Engineered. Heat-Treated. Built to Endure.
          </p>
          <p className="Paragraph">
            SAP Parts™ offers an extensive range of hardened steel and non-ferrous bushings 
            designed for high-load, wear-intensive environments. With in-house heat treatment 
            and CNC machining capabilities, our bushings deliver tight tolerances, extended 
            service life, and superior load-bearing performance for demanding OEM applications.
          </p>
        </div>
      </div>
    </section>
  );
}
