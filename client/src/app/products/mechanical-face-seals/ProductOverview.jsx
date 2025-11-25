// components/ProductOverview.js
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ProductOverview() {
  const { t } = useTranslation();

  const content = {
    title: t("productOverview.title"),
    description: t("productOverview.description"),
  };

  return (
    <section className="Section bg-white">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6">
          <div className="border-[3px] border-dashed border-yellow-400 p-3">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/home/MechanicalFS.jpg"
                alt="Bushings"
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0 max-w-xl">
          <h2 className="Heading text-[#0E509E] mb-4">{content.title}</h2>
          <p className="Paragraph text-[#363636] leading-relaxed">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
