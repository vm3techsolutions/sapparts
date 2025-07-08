"use client";
import Image from "next/image";

export default function ManufacturingPlantsSection() {
  return (
    <div className="bg-white Section">
      <h2 className="Heading text-center">Manufacturing Plants</h2>

      {/* Cards & Map */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 sm:gap-0 mt-12">
        
        {/* Left Card */}
        <div className="w-full max-w-sm bg-white rounded-md shadow-md p-4 z-10">
          <Image
            src="/assets/about/Manufacturing1.png"
            alt="Pune Plant"
            width={400}
            height={250}
            className="rounded-md mb-3 object-cover w-full"
          />
          <p><span className="font-bold">Location</span>: Pune</p>
          <p><span className="font-bold">Products</span>: Mechanical Face Seals & PM Sintered Parts</p>
          <p><span className="font-bold">Key Processes</span>: Centrifugal Casting, Machining, Lapping, Elastomer Molding</p>
          <p><span className="font-bold">Facility</span>: Area: 2.5 Acres<br />Built-up: 80,000 Sqft.</p>
        </div>

        {/* Map (centered and responsive) */}
        <div className="relative z-0 opacity-80 w-[250px] md:w-[300px] lg:w-[400px]">
          <Image
            src="/assets/about/Manufacturing2.png"
            alt="India Map"
            width={400}
            height={320}
            className="w-full h-auto mx-auto"
          />
        </div>

        {/* Right Card */}
        <div className="w-full max-w-sm bg-white rounded-md shadow-md p-4 z-10">
          <Image
            src="/assets/about/Manufacturing3.png"
            alt="Solapur Plant"
            width={400}
            height={250}
            className="rounded-md mb-3 object-cover w-full"
          />
          <p><span className="font-bold">Location</span>: Solapur</p>
          <p><span className="font-bold">Products</span>: Agri Hubs, Bushings, Precision Parts</p>
          <p><span className="font-bold">Key Processes</span>: SQF-nitriding, Carburizing, Grinding, Machining</p>
          <p><span className="font-bold">Facility</span>: Area: 65 Acres<br />Built-up: 100,000 Sqft.</p>
        </div>
      </div>
    </div>
  );
}
