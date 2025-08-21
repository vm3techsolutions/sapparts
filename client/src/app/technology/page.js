"use client";
import Image from "next/image";

export default function CentrifugalCasting() {
  return (
    <section className="bg-white px-6 py-12 lg:px-20 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E509E]">
            Cker kaCentrifugal Casting Process
          </h2>
          <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
            SAP Parts CENTRiCAST Process is a specialized centrifugal casting method that uses
            centrifugal force to produce high-quality, dense, and durable metal components like
            rings, sleeves, and bushings. It is particularly effective for creating wear-resistant
            parts from materials like Carbidic Graphitic Ni-Hard Alloy White Cast Iron.
          </p>
        </div>

        {/* Image + Right Content */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/casting-worker.jpg" // replace with your image path
              alt="Casting Process"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Content + Blue Cards */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-4">
              Unique Manufacturing Processes
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800">CENTRiCAST Process</h4>
              <p className="text-gray-600 mt-2">
                This is SAP Parts&apos; core technology, a highly controlled centrifugal casting
                method. This directed solidification pushes impurities towards the inner diameter of
                the casting, leaving a pure, strong outer layer critical for wear-resistant
                applications.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800">
                Robotic Near–Net–Shape Casting
              </h4>
              <p className="text-gray-600 mt-2">
                SAP Parts integrates advanced robotics into its casting process. Robots handle
                critical tasks with extreme precision, from mold preparation to pouring molten metal.
                This level of control minimizes human error and allows for the creation of parts
                that are very close to their final dimensions, significantly reducing costly
                post-casting machining.
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-4">
              Proprietary Materials
            </h3>
            <p className="text-gray-600 mb-6">
              SAP Parts has developed its own proprietary metallurgical grades to meet specific
              performance demands that generic alloys cannot. These materials are formulated and
              produced exclusively using the CENTRiCAST process.
            </p>

            {/* Blue Cards under text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0E509E] text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">JaliKayas</h4>
                <p className="text-sm">
                  This grade is engineered for high abrasion resistances. Its composition is designed
                  with a high volume of very fine, hard carbides, which resist the cutting and
                  scratching action of abrasive particles. The CENTRiCAST process ensures these
                  carbides are uniformly distributed.
                </p>
              </div>
              <div className="bg-[#0E509E] text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">KrsNayas</h4>
                <p className="text-sm">
                  This grade is developed for high wear and impact resistance. KrsNayas balances
                  extreme hardness with a degree of toughness. Its unique microstructure allows it to
                  resist wear while withstanding fatigue and fracture that can occur under repeated
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
