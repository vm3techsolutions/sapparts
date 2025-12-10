'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      en: "What types of construction equipment use your components?",
      ja: "御社の部品はどのような建設機械で使用されていますか？",
      de: "Welche Arten von Baumaschinen verwenden Ihre Komponenten?"
    },
    answer: {
      en: "Our components are used in excavators, loaders, bulldozers, backhoe loaders, graders, compactors, dump trucks, and drilling rigs, ensuring reliable performance under extreme working conditions.",
      ja: "当社の部品は、油圧ショベル、ローダー、ブルドーザー、バックホーローダー、グレーダー、コンパクター、ダンプトラック、掘削機など、過酷な作業条件下で信頼性を発揮する建設機械に使用されています。",
      de: "Unsere Komponenten werden in Baggern, Ladern, Planierraupen, Baggerladern, Gradern, Verdichtern, Muldenkippern und Bohrgeräten eingesetzt und bieten zuverlässige Leistung unter extremen Arbeitsbedingungen."
    }
  },
  {
    question: {
      en: "Why are mechanical face seals critical for construction machinery?",
      ja: "建設機械においてメカニカルフェイスシールが重要なのはなぜですか？",
      de: "Warum sind mechanische Gleitringdichtungen für Baumaschinen entscheidend?"
    },
    answer: {
      en: "Mechanical face seals protect final drives, track rollers, and wheel hubs from mud, sand, dust, and water while maintaining integrity under high vibration and pressure.",
      ja: "メカニカルフェイスシールは、ファイナルドライブ、トラックローラー、ホイールハブを泥、砂、粉じん、水から保護し、高振動や高圧環境でも密封性を維持します。",
      de: "Mechanische Gleitringdichtungen schützen Endantriebe, Laufrollen und Radnaben vor Schlamm, Sand, Staub und Wasser und behalten ihre Dichtheit auch bei starken Vibrationen und hohem Druck bei."
    }
  },
  {
    question: {
      en: "What benefits do sintered products offer for the construction industry?",
      ja: "建設業界において焼結製品はどのような利点を提供しますか？",
      de: "Welche Vorteile bieten Sinterprodukte für die Bauindustrie?"
    },
    answer: {
      en: "Sintered components offer strength, precision, wear resistance, and self-lubrication, making them ideal for bushings, gears, and bearings in heavy-duty machinery.",
      ja: "焼結部品は強度、精度、耐摩耗性、自己潤滑性に優れ、重機のブッシング、ギア、ベアリングに最適です。",
      de: "Sinterteile bieten hohe Festigkeit, Präzision, Verschleißfestigkeit und Selbstschmierung und eignen sich ideal für Buchsen, Zahnräder und Lager in schweren Maschinen."
    }
  },
  {
    question: {
      en: "How do SAP hub bearings perform in off-road and heavy-load environments?",
      ja: "SAPハブベアリングはオフロードや高荷重環境でどのように性能を発揮しますか？",
      de: "Wie funktionieren SAP-Nabenlager in Gelände- und Hochlastumgebungen?"
    },
    answer: {
      en: "SAP hub bearings are engineered for high durability and load capacity, withstanding shock loads and rough terrain to reduce downtime and maintenance needs.",
      ja: "SAPハブベアリングは高耐久性と高荷重能力を備え、衝撃荷重や悪路に耐え、ダウンタイムとメンテナンス頻度を低減します。",
      de: "SAP-Nabenlager sind für hohe Haltbarkeit und Tragfähigkeit ausgelegt, widerstehen Stoßbelastungen und unebenem Gelände und reduzieren Ausfallzeiten sowie Wartungsaufwand."
    }
  },
  {
    question: {
      en: "Are your products suitable for high-impact and high-vibration applications?",
      ja: "御社の製品は高衝撃・高振動環境での使用に適していますか？",
      de: "Sind Ihre Produkte für Anwendungen mit hohen Stößen und Vibrationen geeignet?"
    },
    answer: {
      en: "Yes, our components are designed to perform reliably under high impact, heavy vibration, and extreme pressure commonly encountered in construction machinery.",
      ja: "はい。当社の部品は、建設機械で一般的な高衝撃・高振動・高圧環境でも信頼性を発揮するよう設計されています。",
      de: "Ja, unsere Komponenten sind für zuverlässige Leistung unter starken Stößen, starken Vibrationen und extremem Druck ausgelegt."
    }
  },
  {
    question: {
      en: "What materials do you use for your heavy equipment bushings and seals?",
      ja: "重機用ブッシングやシールにはどのような材料を使用していますか？",
      de: "Welche Materialien verwenden Sie für Buchsen und Dichtungen schwerer Maschinen?"
    },
    answer: {
      en: "We use hardened steel, sintered bronze, and composite alloys designed to resist wear, corrosion, and deformation in abrasive environments.",
      ja: "当社は、摩耗、腐食、変形に強い硬化鋼、焼結青銅、複合合金を使用しています。",
      de: "Wir verwenden gehärteten Stahl, Sinterbronze und Verbundlegierungen, die für verschleißintensive Umgebungen entwickelt wurden."
    }
  },
  {
    question: {
      en: "Are your components tested for extreme environmental conditions?",
      ja: "御社の部品は過酷な環境条件でテストされていますか？",
      de: "Werden Ihre Komponenten für extreme Umweltbedingungen getestet?"
    },
    answer: {
      en: "All components undergo durability, load, and environmental testing including mud, water, heat, and vibration exposure to ensure reliable on-site performance.",
      ja: "当社のすべての部品は、泥、水、熱、振動などの環境に対する耐久性・耐荷重性テストを実施し、現場での信頼性を確保しています。",
      de: "Alle Komponenten werden auf Haltbarkeit, Tragfähigkeit und Umweltbeständigkeit getestet, einschließlich Schlamm-, Wasser-, Hitze- und Vibrationsbelastung."
    }
  }
];



export default function FaqSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">{t("FAQs")}</h2>
      <p className="text-center text-[#363636] text-3xl font-semibold mb-8">{t("Any Question? Look Here:")}</p>

      <div className="space-y-8 sm:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            {/* Question Div */}
            <div className="bg-[#D9D9D9]/20 rounded-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#363636]/80 font-medium focus:outline-none sm:text-[25px] text-md"
              >
                 <span>{faq.question[currentLang]}</span>
                <span className="ml-4">
                  <div className="w-7 h-7 flex items-center justify-center bg-[#FACC48] text-white rounded-full text-base ">
                    {openIndex === index ? <FaChevronDown /> : <FaChevronUp />}
                  </div>
                </span>
              </button>
            </div>

            {/* Answer Div (separate and spaced) */}
            {openIndex === index && (
              <div className="mt-3 px-6 py-4 text-[#363636]/70 bg-[#D9D9D9]/20 text-sm sm:text-base rounded-md">
                 {faq.answer[currentLang]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
