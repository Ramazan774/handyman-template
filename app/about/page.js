"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

const CoverPhoto = () => (
  <div className="relative h-80 lg:h-96">
    <Image
      src="/assets/image8.webp"
      alt="Cover photo"
      layout="fill"
      objectFit="cover"
      className="opacity-80"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="arima text-7xl font-bold text-white text-center z-10 drop-shadow-lg">
        Our Company
      </h1>
    </div>
    <div className="absolute -bottom-1 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
        <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </div>
);

const MainSection = () => (
  <div className="relative z-10 bg-white pb-20 sm:pb-24 xl:pb-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-x-8 gap-y-16 lg:gap-y-0">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[2/1] relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              className="rounded-full object-cover shadow-2xl"
              src="/assets/image7.webp"
              alt="Testimonial image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 lg:pt-8">
          <div className="relative isolate">
            <div className="arima text-lg font-medium leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p>Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
              Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
              Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
              Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.</p>
            </div>
            <div className="mt-8 text-base">
              <Link href="/contact" className="arima inline-block px-6 py-2 border border-blue-800 text-white bg-blue-700 hover:bg-blue-900 rounded-2xl transition duration-300 text-center">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StatItem = ({ label, value }) => (
  <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 lg:mt-16">
    <p className="text-sm font-medium leading-6 text-gray-600">{label}</p>
    <p className="mt-2 flex items-baseline gap-x-2">
      <span className="text-4xl font-semibold tracking-tight text-gray-900">{value}</span>
    </p>
  </div>
);

const StatsSection = () => (
  <div className="arima mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-px bg-white sm:grid-cols-2 lg:grid-cols-4">
      <StatItem label="Number of projects" value="100+" />
      <StatItem label="Average rating" value="5.0" />
      <StatItem label="Number of homes served" value="100+" />
      <StatItem label="Satisfaction rate" value="100%" />
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      <CoverPhoto />
      <MainSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;