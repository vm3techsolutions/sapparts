'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const faqs = [
  {
    question: {
      'en' : 'Do you offer custom gearing for tractor manufacturers?',
      'ja' : 'トラクターメーカー向けにカスタムギアの提供はありますか？'
    },
    answer:
      {
        'en' : 'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
        'ja' : 'この便利なツールを使えば、レイアウトのあらゆるニーズに対応するダミーテキストを簡単に作成できます。私たちは新しい機能を段階的に追加しています。'
      },
      
  },
  {
    question: {
      'en' : 'Do you offer custom gearing for tractor manufacturers?',
      'ja' : 'トラクターメーカー向けにカスタムギアの提供はしていますか？'
    },
    answer: {
      'en' : 'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
      'ja' : 'この便利なツールを使えば、レイアウトのあらゆるニーズに対応するダミーテキストを簡単に作成できます。私たちは新しい機能を段階的に追加しています。'
    },
  },
  {
    question: {
      'en' : 'Do you offer custom gearing for tractor manufacturers?',
      'ja' : 'トラクター製造業者向けにカスタムギアの提供はありますか？'
    },
    answer: {
      'en' : 'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
      'ja' : 'この便利なツールを使えば、レイアウトのあらゆるニーズに対応するダミーテキストを簡単に作成できます。私たちは新しい機能を段階的に追加しています。'
    },
  },
  {
    question: {
      'en' : 'Do you offer custom gearing for tractor manufacturers?',
      'ja' : 'トラクター製造業者向けにカスタムギアの提供はありますか？'
    },
    answer: {
      'en' : 'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
      'ja' : 'この便利なツールを使えば、レイアウトのあらゆるニーズに対応するダミーテキストを簡単に作成できます。私たちは新しい機能を段階的に追加しています。'
    },
  },
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
