"use client";
import Image from "next/image";
import React from "react";

export default function PrecisionComponents() {
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading text-center">Precision Components</h2>

          {/* Centrifugal Cast Machined Parts */}
          {/* Mobile Image */}
          <div className="mb-4 block md:hidden flex justify-center">
            <div className="border border-[#FACC48] rounded-md">
              <Image
                src="/assets/products/PrecisionComponents1.png"
                alt="Centrifugal Cast Parts"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-semibold text-lg mb-1">Centrifugal Cast Machined Parts</p>
          <p className="font-semibold">Materials :</p>
          <p className="ml-4 text-[#000000]">
            1. Duplex stainless steel (1.4470, 1.4517, 1.4410)<br />
            2. Super duplex stainless steel (S32760)<br />
            3. Martensitic Stainless Steel (1.4027, CA40, 17/4 ph)<br />
            4. Ferritic - Carbide Stainless Steel (1.4138, VG434)<br />
            5. Nickel - Chromium (A20)<br />
            6. Austenitic Stainless Steel (CF8M, 1.4404, 1.4408, AISI316)<br />
            7. Abrasion Resistant Cast Iron (ASTM 532 iii A)
          </p>
          <p className="font-semibold mt-3">Applications :</p>
          <p className="ml-4 text-[#000000] mb-8">
            1. Industrial Pump : Casing Rings<br />
            2. Slurry Pumps : Wear / Sit Rings, Impeller Rings<br />
            3. TBM Cutter : Split Rings<br />
            4. Hub Housing : Seal Retainers / Rubber Bonded Adaptors
          </p>

          {/* Rubber Bonded Seal Adopters */}
          {/* Mobile Image */}
          <div className="mb-4 block md:hidden flex justify-center">
            <div className="border border-[#FACC48] rounded-md">
              <Image
                src="/assets/products/PrecisionComponents2.png"
                alt="Rubber Bonded Seal Adopters"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-semibold text-lg mb-1 sm:mt-20">Rubber Bonded Seal Adopters</p>
          <p className="font-semibold">Materials :</p>
          <p className="ml-4 text-[#000000]">
            1. Alloy Steel<br />
            2. Cast Iron<br />
            3. Elastomers
          </p>
          <p className="font-semibold mt-3">Applications :</p>
          <p className="ml-4 text-[#000000]">
            1. Hub Housing : Seal Retainers / Rubber Bonded Adaptors<br />
            2. Military Vehicles : Encased Seals<br />
            3. Farm Implements : Agri Hub Bearings
          </p>
        </div>

        {/* Right Images for Desktop Only */}
        <div className="w-full md:w-1/2 hidden md:flex flex-col gap-10 items-center">
          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/PrecisionComponents1.png"
              alt="Centrifugal Cast Parts"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
          <div className="border border-[#FACC48] rounded-md">
            <Image
              src="/assets/products/PrecisionComponents2.png"
              alt="Rubber Bonded Seal Adopters"
              width={300}
              height={300}
              className="object-contain md:h-[70vh] md:w-[60vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
