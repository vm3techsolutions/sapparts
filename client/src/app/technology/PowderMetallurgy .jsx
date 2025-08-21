"use client";
import React from "react";

export default function PowderMetallurgy() {
  return (
    <section className="Section bg-white">
      <div className=" mx-auto text-center space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
          Powder Metallurgy – Sintering Process
        </h2>

        {/* Subtitle */}
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E]">
          Precision Powder Metallurgy for Complex Geometries
        </h3>

        {/* Description */}
        <div className="space-y-2 text-center text-[#363636] text-base leading-relaxed ">
          <p className="Paragraph">
            SAP Parts possesses a unique and advanced capability in the design, development, and manufacturing of powder metallurgy sintered products. 
            At our state-of-the-art facility, we leverage proprietary processes and specialized equipment to produce components with intricate geometries 
            that meet the rigorous demands of off-highway applications. This in-house expertise ensures full control over every stage of production, 
            from powder compaction to final sintering, guaranteeing consistent quality and performance.
          </p>

          <p className="Paragraph">
            Our core strength lies in our sophisticated Hot Air Rapid De-lube Sintering Furnace. This cutting-edge equipment is the heart of our operation, 
            offering a level of control and precision that sets us apart. For the cleanest possible parts, the furnace features a hot air rapid delubing 
            system with electric heating.
          </p>

          <p className="Paragraph">
            The sintering process itself is managed with exceptional accuracy. The furnace is equipped with multi-zone sintering sections and Refractory 
            Embedded Heaters, allowing for precise temperature profiles and uniform heating. All processes are monitored and managed by a comprehensive 
            SCADA system, which provides customized furnace control and a robust quality management framework, ensuring every sintered component 
            meets the highest standards for strength, durability, and reliability.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="text-xl md:text-xl font-semibold text-[#0E509E] mt-4">
          Integrated Tooling & Prototyping
        </h3>

        {/* Description */}
        <p className="text-[#363636] text-base leading-relaxed text-center -mt-2">
          A key component of our powder metallurgy capability is our in-house expertise in designing and developing tooling for various intricate profiles. 
          This allows us to rapidly create prototypes and mass-produce complex components such as sleeves, gears, latches, and many more. By managing the 
          entire tooling process internally, we can ensure the highest level of precision and consistency, reducing lead times and providing a seamless 
          transition from design to final production. This integrated approach ensures that even the most complex geometries are manufactured with 
          exceptional accuracy and efficiency.
        </p>
      </div>
    </section>
  );
}
