"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function StrategySection() {
  const { t } = useTranslation();

  return (
    <div className="Section bg-white px-4 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Images */}
        <div className="flex gap-4 sm:gap-6 md:mt-0 mt-8 sm:ml-0">
          {/* Left image */}
          <div className="group w-[40vw] h-[28vh] sm:w-[250px] sm:h-[55vh] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/home/ourStratergy1.png"
              alt="Strategy Image 1"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Right image */}
          <div className="group w-[40vw] h-[28vh] sm:w-[250px] sm:h-[55vh] mt-10 sm:mt-24 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/home/ourStratergy2.png"
              alt="Strategy Image 2"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-xl">
          <h2 className="Heading  mb-4">
            {t("Our Statergy")}
          </h2>

          <p className="Paragraph ">
            {t("Our-Statergy-Description")}
          </p>

          <div className="space-y-6 mt-6">
            {[
              t("Engineering Excellence"),
              t("Customer-Centric Innovation"),
              t("Sustainability & Longevity"),
              t("Global Support, Local Commitment"),
            ].map((label, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-between group text-[#0E509E] text-lg font-medium"
              >
                {label}
                <div className="bg-[#FACC48] p-2 text-black transition-transform group-hover:translate-x-1">
                  <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="#" className="inline-block Button">
              {t("Know More")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
