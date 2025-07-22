'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you offer custom gearing for tractor manufacturers?',
    answer:
      'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
      
  },
  {
    question: 'Do you offer custom gearing for tractor manufacturers?',
    answer:
      'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
  },
  {
    question: 'Do you offer custom gearing for tractor manufacturers?',
    answer:
      'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
  },
  {
    question: 'Do you offer custom gearing for tractor manufacturers?',
    answer:
      'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Section bg-white">
      <h2 className="Heading text-center">FAQs</h2>
      <p className="text-center text-[#363636] text-3xl font-semibold mb-8">Any Question? Look Here:</p>

      <div className="space-y-8 sm:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            {/* Question Div */}
            <div className="bg-[#D9D9D9]/20 rounded-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#363636]/80 font-medium focus:outline-none text-[25px]"
              >
                <span>{faq.question}</span>
                <span className="ml-4">
                  <div className="w-7 h-7 flex items-center justify-center bg-[#FACC48] text-white rounded-full text-base ">
                    {openIndex === index ? <FaChevronDown /> : <FaChevronUp />}
                  </div>
                </span>
              </button>
            </div>

            {/* Answer Div (separate and spaced) */}
            {openIndex === index && (
              <div className="mt-3 px-6 py-4 text-[#363636]/70 bg-[#D9D9D9]/20 text-base rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
