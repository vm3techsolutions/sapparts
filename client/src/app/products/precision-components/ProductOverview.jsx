"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ProductOverview() {
  const { t } = useTranslation();

  const paragraphs = t("productOverview6.paragraphs", { returnObjects: true });

  return (
    <section className="Section bg-white">
      <div className="flex flex-col md:flex-row items-center gap-20 mx-auto">
        {/* Left: Image with double dashed border */}
        <div className="border-[3px] border-dashed border-yellow-400 p-6">
          <div className="border-[3px] border-dashed border-yellow-400">
            <div className="w-[280px] md:w-[400px]">
              <Image
                src="/assets/products/ProductOverview.png"
                alt={t("productOverview6.imageAlt")}
                width={600}
                height={400}
                className="object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="-mt-8 sm:-mt-0">
          <h2 className="Heading">{t("productOverview6.title")}</h2>
          {paragraphs.map((para, idx) => (
            <p key={idx} className="Paragraph">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
