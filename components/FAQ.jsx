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

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = `faq-${index}`;

  return (
    <div className="pt-6">
      <dt>
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={itemId}
        >
          <span className="text-base font-semibold leading-7">{question}</span>
          <span className="ml-6 flex h-7 items-center" aria-hidden="true">
            <svg
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd 
        id={itemId}
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
      question: "What services do you offer?",
      answer: "We offer a wide range of handyman services including plumbing, electrical work, carpentry, painting, and general home repairs. No job is too small or too big for our skilled team."
    },
    {
      question: "How do I schedule a service?",
      answer: "You can easily schedule a service by calling our office, using our online booking system, or sending us an email. We'll get back to you promptly to confirm your appointment."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we understand that some repairs can't wait. We offer 24/7 emergency services for urgent issues like major leaks or electrical problems."
    },
    {
      question: "Are your handymen licensed and insured?",
      answer: "Absolutely! All our handymen are fully licensed, insured, and have undergone thorough background checks. We prioritize your safety and peace of mind."
    }
  ];

  return (
    <section className="bg-gray-100 overflow-hidden" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="lg:flex lg:items-start lg:gap-x-12">
          {/* Images section */}
          <div className="mb-16 lg:mb-0 lg:w-1/2">
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <StaticImage src="/assets/image2.webp" alt="Handyman working on electrical repairs" className="justify-self-end" />
              <StaticImage src="/assets/image3.webp" alt="Plumbing repair in progress" className="justify-self-start" />
              <StaticImage src="/assets/image7.webp" alt="Carpentry work being performed" className="justify-self-end" />
              <StaticImage src="/assets/image6.webp" alt="Painting and finishing touches" className="justify-self-start" />
            </div>
          </div>

          {/* Text section */}
          <div className="lg:w-1/2">
            <h2 id="faq-heading" className="arima text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-12">Frequently Asked Questions</h2>
            <dl className="nunito mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;