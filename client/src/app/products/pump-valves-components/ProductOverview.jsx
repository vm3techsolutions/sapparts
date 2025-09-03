"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductOverview() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6">
          <div className="border-[3px] border-dashed border-yellow-400 p-">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/products/ProductOverview.png"
                alt={t("productOverview4.title")}
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0">
          <h2 className="Heading">{t("productOverview4.title")}</h2>
          <p className="Paragraph whitespace-pre-line">
            {t("productOverview4.subtitle")}
          </p>
          <p className="Paragraph">
            {t("productOverview4.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
