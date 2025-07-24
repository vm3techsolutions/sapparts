"use client";
import Image from "next/image";

export default function ManufacturingProcesses() {
  return (
    <div className="Section bg-white">
      <h2 className="Heading">Manufacturing Processes</h2>
      <div className="flex flex-col lg:flex-row sm:gap-20  gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
          {/* Top Image */}
          <div className="w-full">
            <Image
              src="/assets/technology/Manufacturing1.png"
              alt="Manufacturing Image 1"
              width={800}
              height={600}
              className="w-full sm:h-[65vh] rounded shadow"
            />
          </div>
          {/* Bottom Images in a row */}
          <div className="flex gap-4">
            <Image
              src="/assets/technology/Manufacturing2.png"
              alt="Manufacturing Image 2"
              width={400}
              height={300}
              className="w-1/2 h-auto rounded shadow"
            />
            <Image
              src="/assets/technology/Manufacturing3.png"
              alt="Manufacturing Image 3"
              width={400}
              height={300}
              className="w-1/2 h-auto rounded shadow"
            />
          </div>
        </div>

        {/* Right Side - Text */}
       <div className="w-full lg:w-1/2 text-md  leading-6">
  <ul className="space-y-3">
    <li>
      <strong className="text-black text-xl">• Centrifugal Casting</strong><br />
      <span>Ni-Hard Cast Alloy Steel, White Cast Iron</span>
    </li>
    <li>
      <strong className="text-black text-xl">• Compression Rubber Molding</strong><br />
      <span>NBR, HNBR, NBR-LT, FKM, Silicon</span>
    </li>
    <li>
      <strong className="text-black text-xl">• Precision Lapping</strong><br />
      <span>
        Spherical, Flat, Finish Surface Lapping, Polishing,<br />
        Ultrasonic Washing & Cleaning
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• Precision Machining</strong><br />
      <span>
        CNC Machining Centre {"<"} 400 mm Dia.<br />
        VTL Machining Centre {"<"} 1500 mm Dia.
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• Precision Grinding</strong><br />
      <span>
        Centerless, Bore, Surface Grinding {"<"} 300 mm Dia.<br />
        Proprietary Tool holding devices.
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• Heat Treatment</strong><br />
      <span>
        Hardening Tempering - Cryogenic Treatment.<br />
        Induction Hardening, Carburizing, Gas Nitrating, Laser<br />
        Treatment, Plug Quenching
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• Surface Treatments</strong><br />
      <span>
        Shot Blasting, Amorphous Phosphating, CED Coating,<br />
        MOS2 Coating, WS2 Coating, Zn Passivation.
      </span>
    </li>
    <li>
      <strong className="text-black text-xl">• Powder Metallurgy</strong><br />
      <span>Sintering Process, Oil Impregnation, Steam Oxidation</span>
    </li>
    <li>
      <strong className="text-black text-xl">• Automatic Assembly</strong><br />
      <span>Product Assembly & Clean Packaging Line Laser Marking System</span>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}
