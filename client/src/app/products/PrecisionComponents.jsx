"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PrecisionComponents() {
  const {t} = useTranslation();
  return (
    <div className="Section bg-white">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="Heading text-center">{t("Precision Components")}</h2>

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

          <p className="font-semibold text-lg mb-1">{t("Centrifugal Cast Machined Parts")}</p>
          <p className="font-semibold">{t("Materials")} :</p>
          <p className="ml-4 text-[#000000]">
            1. {t("Duplex stainless steel (1.4470, 1.4517, 1.4410)")}<br />
            2. {t("Super duplex stainless steel (S32760)")}<br />
            3. {t("Martensitic Stainless Steel (1.4027, CA40, 17/4 ph)")}<br />
            4. {t("Ferritic - Carbide Stainless Steel (1.4138, VG434)")}<br />
            5. {t("Nickel - Chromium (A20)")}<br />
            6. {t("Austenitic Stainless Steel (CF8M, 1.4404, 1.4408, AISI316)")}<br />
            7. {t("Abrasion Resistant Cast Iron (ASTM 532 iii A)")}
          </p>
          <p className="font-semibold mt-3">{t("Applications")} :</p>
          <p className="ml-4 text-[#000000] mb-8">
            1. {t("Industrial Pump : Casing Rings")}<br />
            2. {t("Slurry Pumps : Wear / Sit Rings, Impeller Rings")}<br />
            3. {t("TBM Cutter : Split Rings")}<br />
            4. {t("Hub Housing : Seal Retainers / Rubber Bonded Adaptors")}
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

          <p className="font-semibold text-lg mb-1 sm:mt-20">{t("Rubber Bonded Seal Adopters")}</p>
          <p className="font-semibold">{t("Materials")} :</p>
          <p className="ml-4 text-[#000000]">
            1. {t("Alloy Steel")}<br />
            2. {t("Cast Iron")}<br />
            3. {t("Elastomers")}
          </p>
          <p className="font-semibold mt-3">{t("Applications")} :</p>
          <p className="ml-4 text-[#000000]">
            1. {t("Hub Housing : Seal Retainers / Rubber Bonded Adaptors")}<br />
            2. {t("Military Vehicles : Encased Seals")}<br />
            3. {t("Farm Implements : Agri Hub Bearings")}
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
