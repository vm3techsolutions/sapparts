// components/ProductOverview.js
"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductOverview() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white ">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6">
          <div className="border-[3px] border-dashed border-yellow-400 p-2">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/products/ProductOverview.png" 
                alt={t("productOverview5.alt")}
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="Heading">{t("productOverview5.title")}</h2>
          <p className="Paragraph whitespace-pre-line">
            {t("productOverview5.subtitle")}
          </p>
          <p className="Paragraph">{t("productOverview5.description")}</p>
        </div>
      </div>
    </section>
  );
}
