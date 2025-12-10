'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      'en': 'What types of industrial sectors do your components serve?',
      'ja': '御社の部品はどのような産業分野で使用されていますか？',
      'de': 'In welchen industriellen Bereichen werden Ihre Komponenten eingesetzt?'
    },
    answer: {
      'en': 'Our components are used across manufacturing, material handling, process plants, pumps, compressors, hydraulic systems, conveyors, and heavy machinery where reliability and precision are essential.',
      'ja': '当社の部品は、製造業、マテリアルハンドリング、プロセスプラント、ポンプ、コンプレッサー、油圧システム、コンベヤー、重機など、信頼性と精度が求められる幅広い産業分野で使用されています。',
      'de': 'Unsere Komponenten werden in der Fertigung, Materialhandhabung, Prozessanlagen, Pumpen, Kompressoren, Hydrauliksystemen, Förderanlagen und schweren Maschinen eingesetzt, wo Zuverlässigkeit und Präzision entscheidend sind.'
    },
  },
  {
    question: {
      'en': 'Why are mechanical face seals important in industrial equipment?',
      'ja': '産業機器においてメカニカルフェイスシールが重要なのはなぜですか？',
      'de': 'Warum sind Gleitringdichtungen in Industrieanlagen wichtig?'
    },
    answer: {
      'en': 'Mechanical face seals prevent leakage and protect rotating assemblies from dust, debris, and fluids, ensuring longer equipment life and reduced downtime.',
      'ja': 'メカニカルフェイスシールは漏れを防ぎ、回転部をほこり、異物、液体から保護し、機器寿命の延長とダウンタイムの削減に寄与します。',
      'de': 'Gleitringdichtungen verhindern Leckagen und schützen rotierende Baugruppen vor Staub, Schmutz und Flüssigkeiten, was die Lebensdauer der Anlagen verlängert und Ausfallzeiten reduziert.'
    },
  },
  {
    question: {
      'en': 'What benefits do sintered products provide for industrial applications?',
      'ja': '焼結製品は産業用途にどのような利点をもたらしますか？',
      'de': 'Welche Vorteile bieten Sinterprodukte für industrielle Anwendungen?'
    },
    answer: {
      'en': 'Sintered components provide excellent wear resistance, dimensional accuracy, and self-lubrication, ideal for high-speed and high-load machinery.',
      'ja': '焼結部品は優れた耐摩耗性、寸法精度、自己潤滑性を備えており、高速・高負荷の産業機械に最適です。',
      'de': 'Sinterteile bieten hervorragende Verschleißfestigkeit, Maßgenauigkeit und Selbstschmierung und eignen sich ideal für Hochgeschwindigkeits- und Hochlastmaschinen.'
    },
  },
  {
    question: {
      'en': 'How do SAP hub bearings perform in heavy industrial environments?',
      'ja': 'SAPハブベアリングは過酷な産業環境でどのように性能を発揮しますか？',
      'de': 'Wie funktionieren SAP-Nabenlager in schweren Industrieumgebungen?'
    },
    answer: {
      'en': 'SAP hub bearings are built to support continuous loads, high-speed rotation, and harsh operating conditions, ensuring smooth performance and long service life.',
      'ja': 'SAPハブベアリングは連続負荷、高速回転、過酷な動作条件に対応し、安定した性能と長寿命を実現します。',
      'de': 'SAP-Nabenlager sind für kontinuierliche Belastungen, hohe Drehzahlen und raue Betriebsbedingungen ausgelegt und gewährleisten eine stabile Leistung und lange Lebensdauer.'
    },
  },
  {
    question: {
      'en': 'Are your products suitable for continuous or high-duty operations?',
      'ja': '御社の製品は連続運転や高負荷運転に適していますか？',
      'de': 'Sind Ihre Produkte für kontinuierliche oder hochbelastete Einsätze geeignet?'
    },
    answer: {
      'en': 'Yes, our components are engineered for long-term performance under continuous, high-load, and cyclic operations common in industrial environments.',
      'ja': 'はい、当社の部品は産業環境で一般的な連続運転、高負荷運転、サイクル運転において長期的な性能を発揮するよう設計されています。',
      'de': 'Ja, unsere Komponenten sind für langfristige Leistung bei kontinuierlichen, hochbelasteten und zyklischen Betriebsbedingungen ausgelegt.'
    },
  },
  {
    question: {
      'en': 'Can you manufacture custom components for specific industrial machinery?',
      'ja': '特定の産業機械向けにカスタム部品を製造できますか？',
      'de': 'Können Sie maßgeschneiderte Komponenten für spezielle Industriemaschinen herstellen?'
    },
    answer: {
      'en': 'Yes, we offer custom solutions based on client requirements, including tailored dimensions, materials, tolerances, and coatings.',
      'ja': 'はい、お客様の要件に基づき、寸法、材料、公差、コーティングなどをカスタマイズしたソリューションを提供しています。',
      'de': 'Ja, wir bieten kundenspezifische Lösungen basierend auf den Anforderungen unserer Kunden an, einschließlich angepasster Abmessungen, Materialien, Toleranzen und Beschichtungen.'
    },
  },
  {
    question: {
      'en': 'Do your products help in reducing equipment maintenance costs?',
      'ja': '御社の製品は機器のメンテナンスコスト削減に役立ちますか？',
      'de': 'Tragen Ihre Produkte zur Reduzierung der Wartungskosten von Anlagen bei?'
    },
    answer: {
      'en': 'Yes, our durable and low-friction components reduce wear and maintenance frequency, lowering overall lifecycle costs.',
      'ja': 'はい、当社の耐久性が高く摩擦の少ない部品は摩耗を軽減し、メンテナンス頻度を抑えることで、ライフサイクルコストの削減に貢献します。',
      'de': 'Ja, unsere langlebigen und reibungsarmen Komponenten reduzieren den Verschleiß und die Wartungshäufigkeit, was die Gesamtkosten über den Lebenszyklus hinweg senkt.'
    },
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
