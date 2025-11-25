// components/ProductsUsed.tsx
"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  {
    label: {
      en: "Mechanical Face Seals",
      ja: "メカニカルフェイスシール",
      de: "Mechanische Dichtungen",
    },
  desc: {
  en: "Mechanical face seals are also called Metal Face Seals, Heavy Duty Seals, Floating Seals, Duo Cone Seals, Glide Seals, and Mirror Seals.",
  ja: "メカニカルフェイスシールは、メタルフェイスシール、ヘビーデューティーシール、フローティングシール、デュオコーンシール、グライドシール、ミラーシールとも呼ばれます。",
  de: "Mechanische Gleitringdichtungen werden auch Metall-Gleitringdichtungen, Schwerlastdichtungen, Schwimmringdichtungen, Duo-Cone-Dichtungen, Gleitdichtungen und Spiegeldichtungen genannt."
},

    src: "/assets/industries/Mechanical Face Seals3.jpg",
  },
  {
    label: {
      en: "Bushings",
      ja: "ブッシング",
      de: "Buchsen",
    },
  desc: {
  en: "SAP Parts™ designs and manufactures a wide range of friction management components for equipment working under severe environments – bushings are one of them.",
  ja: "SAP Parts™は、過酷な環境下で作動する機械のために幅広い摩擦管理コンポーネントを設計および製造しており、ブッシングもその一つです。",
  de: "SAP Parts™ entwickelt und fertigt eine breite Palette von Reibungsmanagement-Komponenten für Maschinen, die unter extremen Bedingungen arbeiten – Buchsen sind eine davon."
},

    src: "/assets/industries/Bushings3.jpg",
  },
];

export default function ProductsUsed() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">{t("Products Used")}</h2>

      <div className="flex flex-wrap justify-center gap-20 mt-10">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-2 w-[300px] border border-[#FACC48] hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={item.src}
                alt={item.label[lang]}
                width={200}
                height={150}
                className="rounded-lg object-contain w-full h-[150px]"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#0E509E] text-center mt-3">
              {item.label[lang] || item.label.en}
            </h3>

            {/* Description */}
            <p className="text-[16px] text-[#363636] text-center mt-2 leading-relaxed">
              {item.desc[lang] || item.desc.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
