'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      'en': 'What types of defence applications do your components serve?',
      'ja': '御社の部品はどのような防衛用途に使用されていますか？',
      'de': 'Für welche Verteidigungsanwendungen werden Ihre Komponenten eingesetzt?'
    },
    answer: {
      'en': 'Our components are used in various defence equipment such as armoured vehicles, missile launch systems, radar assemblies, naval machinery, aircraft ground support systems, and weapon stabilization platforms.',
      'ja': '当社の部品は、装甲車、ミサイル発射システム、レーダー装置、海軍機器、航空機地上支援装置、武器安定化プラットフォームなど、さまざまな防衛機器に使用されています。',
      'de': 'Unsere Komponenten werden in verschiedenen Verteidigungssystemen wie gepanzerten Fahrzeugen, Raketenstarteinrichtungen, Radaranlagen, Marineausrüstung, Bodenunterstützungssystemen für Flugzeuge und Waffenstabilisierungssystemen eingesetzt.'
    },
  },
  {
    question: {
      'en': 'Why are mechanical face seals essential in defence applications?',
      'ja': '防衛用途でメカニカルフェイスシールが重要なのはなぜですか？',
      'de': 'Warum sind mechanische Gleitringdichtungen in Verteidigungsanwendungen unverzichtbar?'
    },
    answer: {
      'en': 'Mechanical face seals protect rotating assemblies from dust, mud, sand, and moisture, ensuring reliability and long service life even in harsh combat conditions.',
      'ja': 'メカニカルフェイスシールは、回転部をほこり、泥、砂、湿気から保護し、過酷な戦闘環境でも信頼性と長寿命を確保します。',
      'de': 'Mechanische Gleitringdichtungen schützen rotierende Baugruppen vor Staub, Schlamm, Sand und Feuchtigkeit und gewährleisten selbst unter extremen Einsatzbedingungen hohe Zuverlässigkeit und Lebensdauer.'
    },
  },
  {
    question: {
      'en': 'What makes your sintered products suitable for military equipment?',
      'ja': '御社の焼結製品が軍用装備に適している理由は何ですか？',
      'de': 'Warum eignen sich Ihre Sinterprodukte für militärische Ausrüstung?'
    },
    answer: {
      'en': 'Sintered components offer high mechanical strength, precision, and self-lubrication, making them ideal for high-load and high-temperature defence environments.',
      'ja': '焼結部品は高い機械強度、精度、自己潤滑性を備えており、高負荷・高温の防衛環境に最適です。',
      'de': 'Sinterteile bieten hohe Festigkeit, Präzision und Selbstschmierung und eignen sich daher ideal für Hochlast- und Hochtemperaturanwendungen im Verteidigungsbereich.'
    },
  },
  {
    question: {
      'en': 'How do SAP hub bearings enhance defence vehicle performance?',
      'ja': 'SAPハブベアリングは防衛車両の性能をどのように向上させますか？',
      'de': 'Wie verbessern SAP-Nabenlager die Leistung von Militärfahrzeugen?'
    },
    answer: {
      'en': 'SAP hub bearings handle heavy loads, shocks, and vibrations, providing smooth rotation and durability required for military vehicles on rough terrain.',
      'ja': 'SAPハブベアリングは重荷重や衝撃、振動に耐え、荒れた地形で走行する軍用車両に必要な滑らかな回転と耐久性を提供します。',
      'de': 'SAP-Nabenlager bewältigen hohe Lasten, Stöße und Vibrationen und bieten die für militärische Fahrzeuge benötigte langlebige und reibungsarme Rotation auf schwierigem Gelände.'
    },
  },
  {
    question: {
      'en': 'Do you design custom components for defence systems?',
      'ja': '防衛システム向けにカスタム部品を設計していますか？',
      'de': 'Entwerfen Sie kundenspezifische Komponenten für Verteidigungssysteme?'
    },
    answer: {
      'en': 'Yes, we work with defence OEMs and research agencies to design and manufacture custom components that meet strict defence specifications.',
      'ja': 'はい、防衛OEMや研究機関と連携し、防衛仕様に準拠したカスタム部品を設計・製造しています。',
      'de': 'Ja, wir arbeiten mit Verteidigungs-OEMs und Forschungseinrichtungen zusammen, um maßgeschneiderte Komponenten gemäß strengen Verteidigungsspezifikationen zu entwickeln und herzustellen.'
    },
  },
  {
    question: {
      'en': 'Are your products compliant with defence-grade standards?',
      'ja': '御社の製品は防衛規格に準拠していますか？',
      'de': 'Entsprechen Ihre Produkte den Verteidigungsstandards?'
    },
    answer: {
      'en': 'Our products follow strict quality and traceability protocols and comply with standards such as ISO 9001, IATF 16949, and other defence-specific certifications.',
      'ja': '当社の製品は厳格な品質・トレーサビリティ基準に従い、ISO 9001、IATF 16949、その他の防衛向け認証に準拠しています。',
      'de': 'Unsere Produkte erfüllen strenge Qualitäts- und Rückverfolgbarkeitsanforderungen und entsprechen Standards wie ISO 9001, IATF 16949 und weiteren verteidigungsspezifischen Zertifizierungen.'
    },
  },
  {
    question: {
      'en': 'Do you support prototyping and R&D for new defence technologies?',
      'ja': '新しい防衛技術のための試作や研究開発を支援していますか？',
      'de': 'Unterstützen Sie Prototyping und Forschung für neue Verteidigungstechnologien?'
    },
    answer: {
      'en': 'Yes, we assist defence R&D centers and OEMs with design validation, prototyping, testing, and material optimization for next-generation defence technologies.',
      'ja': 'はい、防衛R&DセンターやOEMに対し、設計検証、試作、テスト、材料最適化などを通じて次世代防衛技術の開発を支援しています。',
      'de': 'Ja, wir unterstützen Verteidigungsforschungszentren und OEMs bei Designvalidierung, Prototypenbau, Tests und Materialoptimierung für Verteidigungstechnologien der nächsten Generation.'
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
