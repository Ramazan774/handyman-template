"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              className="rounded-2xl object-cover shadow-2xl"
              src="/assets/image7.webp"
              alt="Testimonial image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-[3/2] w-2/3 absolute -bottom-16 -right-8 translate-y-1/4 hidden lg:block">
            <Image
              className="rounded-2xl object-cover shadow-2xl border-4 border-white"
              src="/assets/image4.webp"
              alt="Testimonial image 2"
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

const CallToActionSection = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 lg:mt-0">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="raleway text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Need a helping hand?<br />
          <span className="raleway text-blue-800">Our expert handymen are ready!</span>
        </h2>
        <div className="mt-4 lg:mt-6">
          <Link 
            href="/contact"
            className="arima inline-block bg-blue-700 px-3.5 py-2.5 text-sm font-medium rounded-2xl text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Get A Quote
          </Link>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-8 flex-shrink-0">
        <Image
          src="/assets/handymanicon.webp"
          alt="Handyman Icon"
          width={400}
          height={400}
          objectFit="contain"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      <CoverPhoto />
      <MainSection />
      <StatsSection />
      <CallToActionSection />
    </div>
  );
};

export default AboutPage;