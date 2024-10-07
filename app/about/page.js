"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import CTASection from '@/components/CTASection';

const CoverPhoto = () => (
  <header className="relative h-80 lg:h-96">
    <Image
      src="/assets/image8.webp"
      alt="Photo of a room with a tv"
      layout="fill"
      objectFit="cover"
      className="opacity-80"
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <h1 className="arima text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center z-10 drop-shadow-lg">
        Our Company
      </h1>
    </div>
    <div className="absolute -bottom-1 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20" aria-hidden="true">
        <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </header>
);

const MainSection = () => (
  <section className="relative z-10 bg-white pb-20 sm:pb-24 xl:pb-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-x-8 gap-y-16 lg:gap-y-0">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[2/1] relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              className="rounded-full object-cover shadow-2xl"
              src="/assets/image7.webp"
              alt="Our team at work"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 lg:pt-8">
          <div className="relative isolate">
            <div className="arima text-lg font-medium leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p>{`At [Your Company Name], we pride ourselves on delivering top-notch handyman services with a focus on quality, efficiency, and customer satisfaction. Our team of skilled professionals is ready to tackle any project, big or small, ensuring your home maintenance and improvement needs are met with the highest standards of craftsmanship.`}</p>
              <p className="mt-4">{`With years of experience serving the Madison area, we've built a reputation for reliability, attention to detail, and exceptional customer service. From drywall repair to HVAC maintenance, TV mounting to general household repairs, we're your one-stop solution for all your home service needs.`}</p>
                <p className="mt-4">{`Our commitment to excellence and our deep roots in the local community set us apart. We understand the unique needs of homeowners in Madison and surrounding areas, allowing us to provide tailored solutions that exceed expectations.`}</p>
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
  </section>
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
  <section className="arima mx-auto max-w-7xl" aria-label="Company Statistics">
    <div className="grid grid-cols-1 gap-px bg-white sm:grid-cols-2 lg:grid-cols-4">
      <StatItem label="Number of projects" value="100+" />
      <StatItem label="Average rating" value="5.0" />
      <StatItem label="Number of homes served" value="100+" />
      <StatItem label="Satisfaction rate" value="100%" />
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Our Company | Your Handyman Business</title>
        <meta name="description" content="Learn about our professional handyman services in Madison, WI. With years of experience and a commitment to quality, we're your trusted partner for all home repair and improvement needs." />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>
      <main className="bg-white">
        <CoverPhoto />
        <MainSection />
        <StatsSection />
        <CTASection />
      </main>
    </>
  );
};

export default AboutPage;