"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const products = [
  {
    label: {
      en: "Precision Components",
      ja: "せいみつぶひん",
      de: "Präzisionsbauteile"
    },
  desc: {
  en: "SAP Parts™ is an expert in manufacturing precision components widely used in a variety of applications.",
  ja: "SAP Parts™は、さまざまな用途で広く使用される精密部品の製造における専門家です。",
  de: "SAP Parts™ ist Experte in der Herstellung von Präzisionskomponenten, die in einer Vielzahl von Anwendungen eingesetzt werden."
},

    src: "/assets/industries/ProductsUsed4.png",
  },
  // Add more products below same format
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
              {item.desc?.[lang] || item.desc?.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
