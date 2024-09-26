"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const StaticImage = ({ src, alt, className }) => (
  <div className={`${className} w-50 h-50 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64`}>
    <div className="rounded-full border-4 border-white overflow-hidden shadow-lg">
      <Image src={src} alt={alt} width={256} height={256} className="w-full h-full object-cover" />
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-6">
      <dt>
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold leading-7">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            <svg
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd 
        className={`mt-2 pr-12 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base leading-7 text-gray-600">{answer}</p>
      </dd>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "The flag is a big plus! Switzerland also offers stunning landscapes, excellent chocolate, and precise timepieces."
    },
    {
      question: "How does a quantum computer work?",
      answer: "Quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously, allowing for complex calculations to be performed much faster than classical computers."
    },
    {
      question: "What is the meaning of life?",
      answer: "While there's no universally agreed-upon answer, many philosophers suggest it's about finding personal fulfillment, contributing to society, or simply enjoying the journey of life itself."
    },
    {
      question: "How do you make the perfect cup of coffee?",
      answer: "The perfect cup of coffee varies by preference, but generally involves using freshly roasted beans, the right grind size, proper water temperature (195°F-205°F), and your preferred brewing method."
    }
  ];

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="lg:flex lg:items-start lg:gap-x-12">
          {/* Images section */}
          <div className="mb-16 lg:mb-0 lg:w-1/2">
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <StaticImage src="/assets/image2.webp" alt="Image 1" className="justify-self-end" />
              <StaticImage src="/assets/image3.webp" alt="Image 2" className="justify-self-start" />
              <StaticImage src="/assets/image7.webp" alt="Image 3" className="justify-self-end" />
              <StaticImage src="/assets/image6.webp" alt="Image 4" className="justify-self-start" />
            </div>
          </div>

          {/* Text section */}
          <div className="lg:w-1/2">
            <h2 className="arima text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 mb-12">Frequently Asked Questions</h2>
            <dl className="nunito mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;