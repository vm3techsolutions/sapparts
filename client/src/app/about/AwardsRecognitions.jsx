"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    src: "/assets/about/Awards1.png",
    year: "2015-16 & 2016-17",
    label: {
      "en" : "BEML AWARD for Import Substitution of MFS",
      "ja" : "MFSの輸入代替に対するBEML賞"
    },
  },
  {
    src: "/assets/about/Awards2.png",
    year: "2021",
    label: {
      "en" : "Innovation Award from Mahindra & Mahindra",
      "ja" : "マヒンドラ＆マヒンドラからのイノベーション賞"
    },
  },
  {
    src: "/assets/about/Awards3.png",
    year: "2023",
    label: {
      "en" : "Outstanding Quality Performance Award by M&M",
      "ja" : "マヒンドラ＆マヒンドラによる卓越した品質パフォーマンス賞"
    },
  },
  {
    src: "/assets/about/Awards4.png",
    year: "2024",
    label: {
      "en" : "ACMA Excellence Award Silver Medal for R&D",
      "ja" : "ACMA優秀賞 (研究開発部門）銀メダル"
    },
  },
];

export default function CertificationsSection() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || "en";
  return (
    <div className="bg-[#F6F8FC] Section">
      <h2 className="Heading text-center">{t("Awards & Recognitions")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-6 place-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden  flex flex-col items-center gap-4 w-full"
          >
            {/* Image Box */}
            <div className="border border-[#FACC48] rounded-md w-full max-w-[270px]">
              <Image
                src={cert.src}
                alt={`Certificate ${index + 1}`}
                width={300}
                height={400}
                className="object-contain h-auto w-full rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Text Box */}
            <div className="text-center bg-[#0E509E] py-2 px-3 rounded-md w-full text-white max-w-[270px]">
              <p className="text-lg font-semibold">{cert.year}</p>
              <p className="text-sm mt-1">{cert.label?.[currentLang] || ""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
