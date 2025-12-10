'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      'en': 'What types of mining equipment use your components?',
      'ja': '御社の部品はどのような鉱業機械で使用されていますか？',
      'de': 'Welche Arten von Bergbaugeräten verwenden Ihre Komponenten?'
    },
    answer: {
      'en': 'Our components are used in mining and earthmoving machinery such as dump trucks, excavators, loaders, dozers, drilling rigs, conveyors, crushers, and haul trucks, ensuring reliable operation in extremely harsh and abrasive conditions.',
      'ja': '当社の部品は、ダンプトラック、油圧ショベル、ローダー、ドーザー、掘削リグ、コンベヤー、クラッシャー、ホールトラックなどの鉱業・土木機械で使用され、非常に過酷で摩耗の激しい環境でも信頼性の高い動作を実現します。',
      'de': 'Unsere Komponenten werden in Bergbau- und Erdbewegungsmaschinen wie Muldenkippern, Baggern, Ladern, Planierraupen, Bohranlagen, Förderanlagen, Brechern und Transportfahrzeugen eingesetzt und gewährleisten einen zuverlässigen Betrieb unter extrem rauen und abrasiven Bedingungen.'
    },
  },
  {
    question: {
      'en': 'Why are mechanical face seals crucial in mining equipment?',
      'ja': '鉱業機械においてメカニカルフェイスシールが重要なのはなぜですか？',
      'de': 'Warum sind Gleitringdichtungen in Bergbaugeräten entscheidend?'
    },
    answer: {
      'en': 'Mechanical face seals protect rotating assemblies from mud, dust, water, and abrasive particles, providing long-term sealing performance and extending the life of critical components such as gearboxes, final drives, and track rollers.',
      'ja': 'メカニカルフェイスシールは、泥、粉じん、水、摩耗性粒子から回転部を保護し、長期的なシール性能を提供するとともに、ギアボックス、ファイナルドライブ、トラックローラーなどの重要部品の寿命を延ばします。',
      'de': 'Gleitringdichtungen schützen rotierende Baugruppen vor Schlamm, Staub, Wasser und abrasiven Partikeln und bieten eine langfristige Dichtleistung, wodurch die Lebensdauer wichtiger Komponenten wie Getriebe, Endantriebe und Laufrollen verlängert wird.'
    },
  },
  {
    question: {
      'en': 'What advantages do sintered components offer for mining applications?',
      'ja': '焼結部品は鉱業用途にどのような利点を提供しますか？',
      'de': 'Welche Vorteile bieten Sinterteile für Bergbauanwendungen?'
    },
    answer: {
      'en': 'Sintered components provide high strength, excellent wear resistance, and precise dimensional accuracy. Their self-lubricating properties ensure continuous performance under heavy load and high temperature in mining operations.',
      'ja': '焼結部品は高い強度、優れた耐摩耗性、精密な寸法精度を備えています。また自己潤滑性により、鉱業における重負荷・高温環境でも継続的な性能を発揮します。',
      'de': 'Sinterteile bieten hohe Festigkeit, hervorragende Verschleißfestigkeit und präzise Maßgenauigkeit. Ihre selbstschmierenden Eigenschaften gewährleisten eine kontinuierliche Leistung unter hoher Belastung und hohen Temperaturen im Bergbau.'
    },
  },
  {
    question: {
      'en': 'How do SAP hub bearings perform in mining and off-road machinery?',
      'ja': 'SAPハブベアリングは鉱業機械やオフロード機械でどのように機能しますか？',
      'de': 'Wie funktionieren SAP-Nabenlager in Bergbau- und Offroad-Maschinen?'
    },
    answer: {
      'en': 'SAP hub bearings are designed for extreme load-bearing capacity and impact resistance. They ensure smooth and stable operation even under shock loads and rough terrain, maximizing uptime and minimizing service costs.',
      'ja': 'SAPハブベアリングは極めて高い荷重支持能力と衝撃耐性を備えており、衝撃荷重や険しい地形下でも安定したスムーズな動作を保証し、稼働時間の最大化と整備コストの削減に貢献します。',
      'de': 'SAP-Nabenlager sind für extreme Tragfähigkeit und Schlagfestigkeit ausgelegt. Sie gewährleisten einen ruhigen und stabilen Betrieb selbst bei Stoßbelastungen und schwierigem Gelände, wodurch die Betriebszeit maximiert und Wartungskosten reduziert werden.'
    },
  },
  {
    question: {
      'en': 'Are your products designed to handle abrasive and corrosive mining environments?',
      'ja': '御社の製品は摩耗性・腐食性の高い鉱業環境に対応していますか？',
      'de': 'Sind Ihre Produkte für abrasive und korrosive Bergbauumgebungen ausgelegt?'
    },
    answer: {
      'en': 'Yes, our seals, bushings, and bearings are engineered to withstand abrasive dust, slurry, and corrosive elements while maintaining consistent performance in the toughest conditions.',
      'ja': 'はい、当社のシール、ブッシング、ベアリングは摩耗性粉じん、スラリー、腐食性物質に耐えるよう設計されており、最も過酷な環境でも安定した性能を発揮します。',
      'de': 'Ja, unsere Dichtungen, Buchsen und Lager sind so konstruiert, dass sie abrasivem Staub, Schlamm und korrosiven Elementen standhalten und selbst unter den härtesten Bedingungen eine konstante Leistung bieten.'
    },
  },
  {
    question: {
      'en': 'Do you supply components for both surface and underground mining equipment?',
      'ja': '地上採掘機と地下採掘機の両方に部品を供給していますか？',
      'de': 'Liefern Sie Komponenten sowohl für den Tagebau als auch für den Untertagebau?'
    },
    answer: {
      'en': 'Yes, we supply high-performance components suitable for both surface and underground mining, ensuring reliable operation across diverse mining environments.',
      'ja': 'はい、当社は地上採掘と地下採掘の両方に適した高性能部品を提供しており、さまざまな鉱業環境での信頼性の高い運用を実現します。',
      'de': 'Ja, wir liefern Hochleistungskomponenten für den Tagebau und den Untertagebau und gewährleisten eine zuverlässige Leistung in unterschiedlichen Bergbauumgebungen.'
    },
  },
  {
    question: {
      'en': 'Can your components be customized for specific mining OEM requirements?',
      'ja': '御社の部品は鉱業OEMの特定要件に合わせてカスタマイズできますか？',
      'de': 'Können Ihre Komponenten an die spezifischen Anforderungen von Bergbau-OEMs angepasst werden?'
    },
    answer: {
      'en': 'Yes, we offer complete engineering support to customize dimensions, materials, tolerances, and coatings based on OEM specifications or equipment-specific needs.',
      'ja': 'はい、当社はOEM仕様や機器固有の要件に基づき、寸法、材料、公差、コーティングをカスタマイズするための包括的なエンジニアリングサポートを提供しています。',
      'de': 'Ja, wir bieten umfassende technische Unterstützung zur Anpassung von Abmessungen, Materialien, Toleranzen und Beschichtungen entsprechend den Anforderungen von Bergbau-OEMs oder spezifischen Geräteanforderungen.'
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
