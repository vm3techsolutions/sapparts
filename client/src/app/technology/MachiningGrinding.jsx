"use client";
import Image from "next/image";

export default function MachiningGrinding() {
  return (
    <div className="Section bg-white px-6 py-12 md:py-20">
      <h2 className="Heading">Machining & Grinding</h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start sm:gap-20 gap-10">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Top Large Image */}
          <div className="w-full">
            <Image
              src="/assets/technology/Machining1.png" // Replace with correct image name
              alt="Ring Rolling Forging"
              width={800}
              height={500}
              className="w-full sm:h-[65vh] rounded shadow"
            />
          </div>

          {/* Bottom Two Small Images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image
                src="/assets/technology/Machining2.png"
                alt="Machining Equipment"
                width={400}
                height={300}
                className="w-full h-60 rounded shadow"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/assets/technology/Machining3.png"
                alt="Grinding Machine"
                width={400}
                height={300}
                className="w-full h-60 rounded shadow"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          
          <ul className="space-y-4 text-md  leading-6">
            <li>
              <strong className="text-black text-lg">• Ring Rolling Forging</strong><br />
              Alloy Steel rings made from ring rolling process
            </li>
            <li>
              <strong className="text-black text-lg">• Machining</strong><br />
              CNC Machines VTL
            </li>
            <li>
              <strong className="text-black text-lg">• Heat Treatment</strong><br />
              In-house Sealed quench Furnace by Ipsen Germany:<br />
              <span className="ml-4 block">• Case Carburizing</span>
              <span className="ml-4 block">• Nitriding</span>
              <span className="ml-4 block">• Through Hardening</span>
              <span className="ml-4 block">• Carbo Nitriding</span>
            </li>
            <li>
              <strong className="text-black text-lg">• Grinding</strong><br />
              OD grinding machine Max OD - 200 mm
            </li>
            <li>
              <strong className="text-black text-lg">• Bore Grinding</strong><br />
              In-house bore grinding machine Max ID – 170 mm
            </li>
            <li>
              <strong className="text-black text-lg">• Surface Treatments</strong><br />
              Wear Resistant coating
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
