'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      en: "What types of automotive applications do your products cater to?",
      ja: "御社の製品はどのような自動車用途に対応していますか？",
      de: "Für welche automobilen Anwendungen eignen sich Ihre Produkte?"
    },
    answer: {
      en: "Our components are used in engines, transmissions, steering assemblies, suspension systems, wheel hubs, braking mechanisms, and drivetrains for both commercial and passenger vehicles.",
      ja: "当社の部品は、エンジン、トランスミッション、ステアリング、サスペンション、ホイールハブ、ブレーキ機構、ドライブトレインなど、商用車と乗用車の両方で使用されています。",
      de: "Unsere Komponenten werden in Motoren, Getrieben, Lenkungssystemen, Aufhängungen, Radnaben, Bremssystemen und Antriebssträngen sowohl für Nutzfahrzeuge als auch für Pkw eingesetzt."
    },
  },
  {
    question: {
      en: "What is the role of mechanical face seals in automotive applications?",
      ja: "自動車用途におけるメカニカルフェイスシールの役割は何ですか？",
      de: "Welche Rolle spielen mechanische Gleitringdichtungen in Automobilanwendungen?"
    },
    answer: {
      en: "Mechanical face seals protect rotating parts from dust, dirt, oil, and contaminants, ensuring long-lasting performance of axles, gearboxes, and differentials.",
      ja: "メカニカルフェイスシールは、粉じん、汚れ、オイルなどから回転部品を保護し、アクスル、ギアボックス、デファレンシャルの長寿命化に貢献します。",
      de: "Mechanische Gleitringdichtungen schützen rotierende Teile vor Staub, Schmutz, Öl und Verunreinigungen und sorgen für eine lange Lebensdauer von Achsen, Getrieben und Differenzialen."
    },
  },
  {
    question: {
      en: "Why are sintered components preferred in the automotive sector?",
      ja: "自動車業界で焼結部品が好まれる理由は何ですか？",
      de: "Warum werden Sinterteile im Automobilsektor bevorzugt?"
    },
    answer: {
      en: "Sintered components offer strength, precision, wear resistance, and self-lubrication, making them ideal for gears, pulleys, and bearing parts in high-performance vehicles.",
      ja: "焼結部品は、高強度、高精度、耐摩耗性、自己潤滑性を備えており、高性能車のギア、プーリー、ベアリング部品に最適です。",
      de: "Sinterteile bieten Festigkeit, Präzision, Verschleißfestigkeit und Selbstschmierung und eignen sich perfekt für Zahnräder, Riemenscheiben und Lagerteile in Hochleistungsfahrzeugen."
    },
  },
  {
    question: {
      en: "What benefits do SAP hub bearings bring to automotive assemblies?",
      ja: "SAPハブベアリングは自動車アセンブリにどのような利点をもたらしますか？",
      de: "Welche Vorteile bieten SAP-Nabenlager für Automobilbaugruppen?"
    },
    answer: {
      en: "SAP hub bearings offer high load capacity, low noise, and long service life, improving wheel stability, reducing friction, and enhancing driving performance and safety.",
      ja: "SAPハブベアリングは、高荷重容量、低騒音、長寿命を備え、車輪の安定性を向上させ、摩擦を低減し、走行性能と安全性を高めます。",
      de: "SAP-Nabenlager bieten hohe Tragfähigkeit, geringe Geräuschentwicklung und lange Lebensdauer. Sie verbessern die Stabilität der Räder, reduzieren Reibung und erhöhen die Fahrleistung sowie die Sicherheit."
    },
  },
  {
    question: {
      en: "Are your products compatible with electric and hybrid vehicles?",
      ja: "御社の製品は電気自動車やハイブリッド車にも対応していますか？",
      de: "Sind Ihre Produkte mit Elektro- und Hybridfahrzeugen kompatibel?"
    },
    answer: {
      en: "Yes, our precision-engineered components and seals support high-speed, high-efficiency requirements of electric and hybrid mobility platforms.",
      ja: "はい。当社の精密設計された部品とシールは、電気自動車およびハイブリッド車の高効率・高回転要件に対応しています。",
      de: "Ja, unsere präzisionsgefertigten Komponenten und Dichtungen erfüllen die Anforderungen von Elektro- und Hybridfahrzeugen hinsichtlich hoher Geschwindigkeit und Effizienz."
    },
  },
  {
    question: {
      en: "What materials are commonly used in your automotive components?",
      ja: "自動車部品にはどのような材料が使用されていますか？",
      de: "Welche Materialien werden häufig in Ihren Automobilkomponenten verwendet?"
    },
    answer: {
      en: "We use alloy steel, stainless steel, sintered metals, bronze, and engineered composites based on performance and durability requirements.",
      ja: "当社は、性能および耐久性要件に応じて、合金鋼、ステンレス鋼、焼結金属、青銅、エンジニアリングコンポジットを使用しています。",
      de: "Wir verwenden legierten Stahl, Edelstahl, Sintermetalle, Bronze und technische Verbundwerkstoffe je nach Leistungs- und Haltbarkeitsanforderungen."
    },
  },
  {
    question: {
      en: "How do you ensure quality and reliability in automotive components?",
      ja: "自動車部品の品質と信頼性はどのように確保していますか？",
      de: "Wie stellen Sie Qualität und Zuverlässigkeit Ihrer Automobilkomponenten sicher?"
    },
    answer: {
      en: "We conduct rigorous testing and follow global standards such as ISO 9001 and IATF 16949 to ensure consistent performance and reliability.",
      ja: "当社では、厳格なテストを実施し、ISO 9001やIATF 16949などの国際品質基準に準拠することで、性能と信頼性を確保しています。",
      de: "Wir führen strenge Tests durch und halten internationale Normen wie ISO 9001 und IATF 16949 ein, um gleichbleibende Leistung und Zuverlässigkeit sicherzustellen."
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
      <p className="text-center text-[#363636] sm:text-3xl text-xl font-semibold mb-8">{t("Any Question? Look Here:")}</p>

      <div className="space-y-8 sm:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            {/* Question Div */}
            <div className="bg-[#D9D9D9]/20 rounded-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className=" w-full flex justify-between items-center px-6 py-4 text-left text-[#363636]/80 font-medium focus:outline-none sm:text-[25px] text-md"
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
