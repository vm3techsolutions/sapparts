'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      en: "What types of high-tech applications use your components?",
      ja: "御社の部品はどのようなハイテク分野で使用されていますか？",
      de: "In welchen High-Tech-Anwendungen werden Ihre Komponenten eingesetzt?"
    },
    answer: {
      en: "Our components are widely used in robotics, automation systems, semiconductor manufacturing, medical devices, aerospace subsystems, and precision engineering applications.",
      ja: "当社の部品は、ロボット工学、自動化システム、半導体製造、医療機器、航空宇宙サブシステム、精密工学などの分野で広く使用されています。",
      de: "Unsere Komponenten werden häufig in Robotik, Automatisierungssystemen, Halbleiterfertigung, medizinischen Geräten, Luft- und Raumfahrt-Subsystemen und Präzisionstechnik eingesetzt."
    }
  },

  {
    question: {
      en: "Why are mechanical face seals important in high-tech systems?",
      ja: "ハイテクシステムでメカニカルフェイスシールが重要な理由は何ですか？",
      de: "Warum sind Gleitringdichtungen in High-Tech-Systemen wichtig?"
    },
    answer: {
      en: "Mechanical face seals prevent fluid leakage and contamination, ensuring clean, reliable, and long-lasting operation for sensitive high-tech equipment.",
      ja: "メカニカルフェイスシールは流体漏れや汚染を防ぎ、ハイテク機器の清潔で信頼性の高い長期運転を実現します。",
      de: "Gleitringdichtungen verhindern Leckagen und Verunreinigungen und gewährleisten einen sauberen, zuverlässigen und langlebigen Betrieb empfindlicher High-Tech-Geräte."
    }
  },

  {
    question: {
      en: "How do sintered products benefit the high-tech industry?",
      ja: "焼結製品はハイテク産業にどのような利点をもたらしますか？",
      de: "Welche Vorteile bieten Sinterteile für die High-Tech-Industrie?"
    },
    answer: {
      en: "Sintered components offer high dimensional accuracy, controlled porosity, lightweight strength, and self-lubricating properties ideal for precision applications.",
      ja: "焼結部品は、高い寸法精度、制御された多孔性、軽量強度、自己潤滑性など、精密用途に最適な特性を備えています。",
      de: "Sinterteile bieten hohe Maßgenauigkeit, kontrollierte Porosität, geringes Gewicht, hohe Festigkeit und selbstschmierende Eigenschaften für Präzisionsanwendungen."
    }
  },

  {
    question: {
      en: "What makes your bushings suitable for robotics and automation?",
      ja: "ロボットや自動化用途に御社のブッシュが適している理由は何ですか？",
      de: "Warum eignen sich Ihre Buchsen für Robotik und Automatisierung?"
    },
    answer: {
      en: "Our bushings deliver low friction, smooth motion, reduced vibration, and long service life — essential for robotic arms and automated machinery.",
      ja: "当社のブッシュは、低摩擦、スムーズな動き、振動低減、長寿命を実現し、ロボットアームや自動化機器に最適です。",
      de: "Unsere Buchsen bieten geringe Reibung, gleichmäßige Bewegung, reduzierte Vibrationen und eine lange Lebensdauer – ideal für Roboterarme und Automatisierungsanlagen."
    }
  },

  {
    question: {
      en: "Do your precision components meet high-tolerance requirements?",
      ja: "御社の精密部品は高い許容誤差要求に対応していますか？",
      de: "Erfüllen Ihre Präzisionskomponenten enge Toleranzanforderungen?"
    },
    answer: {
      en: "Yes, we manufacture ultra-precise components with micron-level accuracy and superior surface finish to meet strict high-tech industry standards.",
      ja: "はい、当社はミクロンレベルの精度と高品質な表面仕上げを持つ超精密部品を製造し、厳しいハイテク仕様に対応しています。",
      de: "Ja, wir fertigen hochpräzise Komponenten mit Mikrogenauigkeit und hervorragender Oberflächenqualität, die strenge High-Tech-Anforderungen erfüllen."
    }
  },

  {
    question: {
      en: "Are your products compatible with cleanroom or vacuum environments?",
      ja: "御社の製品はクリーンルームや真空環境に対応していますか？",
      de: "Sind Ihre Produkte für Reinraum- oder Vakuumumgebungen geeignet?"
    },
    answer: {
      en: "Yes, we provide components designed for minimal particle generation and contamination, suitable for semiconductor and medical device manufacturing.",
      ja: "はい、当社の部品は粒子発生と汚染を最小限に抑える設計で、半導体や医療機器の製造に適しています。",
      de: "Ja, wir bieten Komponenten, die minimale Partikelbildung und Kontamination gewährleisten und sich für Halbleiter- und Medizinproduktherstellung eignen."
    }
  },

  {
    question: {
      en: "Can you develop customized components for specialized high-tech applications?",
      ja: "ハイテク用途向けにカスタム部品を開発できますか？",
      de: "Können Sie maßgeschneiderte Komponenten für spezialisierte High-Tech-Anwendungen entwickeln?"
    },
    answer: {
      en: "Yes, our engineering team collaborates with OEMs to design and manufacture custom components tailored to specific performance and environmental needs.",
      ja: "はい、当社のエンジニアリングチームはOEMと連携し、要求に合わせたカスタム部品の設計・製造を行っています。",
      de: "Ja, unser Engineering-Team arbeitet mit OEMs zusammen, um maßgeschneiderte Komponenten für spezifische Leistungs- und Umweltanforderungen zu entwickeln."
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
