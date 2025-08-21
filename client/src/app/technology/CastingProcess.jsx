"use client";
import Image from "next/image";

export default function CentrifugalCasting() {
  return (
    <section className="Section bg-white">
      <div className=" mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-10">
          <h2 className="Heading text-center">
            Cker kaCentrifugal Casting Process
          </h2>
          <p className="Paragraph text-center sm:px-16  ">
            SAP Parts CENTRiCAST Process is a specialized centrifugal casting method that uses
            centrifugal force to produce high-quality, dense, and durable metal components like
            rings, sleeves, and bushings. It is particularly effective for creating wear-resistant
            parts from materials like Carbidic Graphitic Ni-Hard Alloy White Cast Iron.
          </p>
        </div>

        {/* Image + Right Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Image with Yellow Bottom Div */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/assets/technology/CastingProcess.png" 
                alt="Casting Process"
                fill
                className="object-cover rounded-t-lg "
              />
            </div>
            {/* Yellow bottom div */}
            <div className="bg-[#FACC48] h-16 rounded-b-lg"></div>
          </div>

          {/* Right Content + Blue Cards */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E509E] mb-4">
              Unique Manufacturing Processes
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-[#0E509E]">CENTRiCAST Process</h4>
              <p className="text-gray-600 mt-2">
                This is SAP Parts&apos; core technology, a highly controlled centrifugal casting
                method. This directed solidification pushes impurities towards the inner diameter of
                the casting, leaving a pure, strong outer layer critical for wear-resistant
                applications.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-[#0E509E]">
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
                <h4 className="text-lg font-semibold mb-2 text-[#FACC48]">JaliKayas</h4>
                <p className="text-sm">
                  This grade is engineered for high abrasion resistances. Its composition is designed
                  with a high volume of very fine, hard carbides, which resist the cutting and
                  scratching action of abrasive particles. The CENTRiCAST process ensures these
                  carbides are uniformly distributed.
                </p>
              </div>
              <div className="bg-[#0E509E]  text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2 text-[#FACC48]">KrsNayas</h4>
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
