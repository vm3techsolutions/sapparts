'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      en: "What types of agricultural equipment do your components support?",
      ja: "御社のコンポーネントはどのような農業機械に対応していますか？",
      de: "Welche Arten von landwirtschaftlichen Geräten unterstützen Ihre Komponenten?"
    },
    answer: {
      en: "Our mechanical components are designed for a wide range of agricultural machinery including tractors, tillers, harvesters, combines, rotavators, irrigation pumps, and other farm equipment.",
      ja: "当社の機械部品は、トラクター、耕運機、ハーベスター、コンバイン、ロータベーター、灌漑ポンプなど、幅広い農業機械に対応しています。",
      de: "Unsere mechanischen Komponenten sind für eine Vielzahl landwirtschaftlicher Maschinen wie Traktoren, Bodenfräsen, Erntemaschinen, Mähdrescher, Rotavatoren und Bewässerungspumpen ausgelegt."
    },
  },
  {
    question: {
      en: "Why are mechanical face seals important in agricultural machinery?",
      ja: "農業機械においてメカニカルフェイスシールが重要なのはなぜですか？",
      de: "Warum sind mechanische Gleitringdichtungen in landwirtschaftlichen Maschinen wichtig?"
    },
    answer: {
      en: "Mechanical face seals protect rotating components from dust, mud, moisture, and abrasive particles, extending equipment life and ensuring reliable operation in harsh field conditions.",
      ja: "メカニカルフェイスシールは、粉じん、泥、水分、摩耗性粒子から回転部品を保護し、機械寿命を延ばし、過酷な環境でも信頼性を保ちます。",
      de: "Mechanische Gleitringdichtungen schützen rotierende Komponenten vor Staub, Schlamm, Feuchtigkeit und abrasiven Partikeln und verlängern so die Lebensdauer der Maschinen."
    },
  },
  {
    question: {
      en: "What advantages do sintered products offer for agricultural applications?",
      ja: "焼結製品は農業用途にどのような利点を提供しますか？",
      de: "Welche Vorteile bieten Sinterprodukte für landwirtschaftliche Anwendungen?"
    },
    answer: {
      en: "Sintered components offer excellent wear resistance, self-lubrication, and high strength, making them ideal for bearings, bushings, and transmission parts.",
      ja: "焼結部品は、優れた耐摩耗性、自己潤滑性、高強度を備えており、ベアリング、ブッシング、トランスミッション部品に最適です。",
      de: "Sinterteile bieten hervorragende Verschleißfestigkeit, Selbstschmierung und hohe Festigkeit und eignen sich ideal für Lager, Buchsen und Getriebeteile."
    },
  },
  {
    question: {
      en: "Are your products customizable for different agricultural OEM requirements?",
      ja: "農業OEMの要件に合わせて製品をカスタマイズできますか？",
      de: "Können Ihre Produkte an unterschiedliche Anforderungen von landwirtschaftlichen OEMs angepasst werden?"
    },
    answer: {
      en: "Yes, we offer fully customizable solutions including dimensions, materials, tolerances, and surface treatments based on OEM specifications.",
      ja: "はい。寸法、素材、許容差、表面処理など、OEM仕様に基づいた完全なカスタマイズが可能です。",
      de: "Ja, wir bieten vollständig anpassbare Lösungen wie Abmessungen, Materialien, Toleranzen und Oberflächenbehandlungen gemäß OEM-Spezifikationen."
    },
  },
  {
    question: {
      en: "How do SAP hub bearings improve the performance of farm equipment?",
      ja: "SAPハブベアリングは農業機械の性能をどのように向上させますか？",
      de: "Wie verbessern SAP-Nabenlager die Leistung landwirtschaftlicher Maschinen?"
    },
    answer: {
      en: "SAP hub bearings provide high load capacity, shock resistance, and low maintenance, ensuring smoother wheel rotation and better efficiency.",
      ja: "SAPハブベアリングは、高負荷容量、耐衝撃性、低メンテナンス性を備え、車輪の回転を滑らかにし効率を向上させます。",
      de: "SAP-Nabenlager bieten hohe Tragfähigkeit, Stoßfestigkeit und geringen Wartungsbedarf, was für einen ruhigeren Lauf und bessere Effizienz sorgt."
    },
  },
  {
    question: {
      en: "Can your components handle exposure to mud, dust, and water?",
      ja: "御社のコンポーネントは泥・ほこり・水への曝露に耐えられますか？",
      de: "Können Ihre Komponenten Schlamm, Staub und Wasser standhalten?"
    },
    answer: {
      en: "Yes. Our seals and sintered components are engineered to maintain performance even under continuous exposure to contaminants.",
      ja: "はい。当社のシールや焼結部品は、汚染物質に長時間さらされても性能を維持できるよう設計されています。",
      de: "Ja. Unsere Dichtungen und Sinterteile sind darauf ausgelegt, auch bei dauerhafter Belastung durch Verunreinigungen zuverlässig zu funktionieren."
    },
  },
  {
    question: {
      en: "How do your precision components contribute to the efficiency of agricultural machines?",
      ja: "御社の精密部品は農業機械の効率向上にどのように役立ちますか？",
      de: "Wie tragen Ihre Präzisionsteile zur Effizienz landwirtschaftlicher Maschinen bei?"
    },
    answer: {
      en: "Precision components reduce mechanical losses, vibration, and misalignment, resulting in smoother operation and higher efficiency.",
      ja: "精密部品は機械損失、振動、不整合を減らし、スムーズな動作と高い効率を実現します。",
      de: "Präzisionsteile reduzieren mechanische Verluste, Vibrationen und Fehlausrichtung und verbessern so die Gesamtleistung der Maschinen."
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
