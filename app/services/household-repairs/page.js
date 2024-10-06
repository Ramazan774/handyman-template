import React from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Head from "next/head";

const CoverPhoto = () => (
  <div className="relative h-80 lg:h-96">
    <Image
      src="/assets/image8.webp"
      alt="Household repairs service cover image"
      layout="fill"
      objectFit="cover"
      className="opacity-80"
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="arima text-4xl md:text-6xl font-bold text-white text-center z-10 drop-shadow-lg">
        Household Repairs
      </h1>
    </div>
    <div className="absolute -bottom-1 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20" aria-hidden="true">
        <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </div>
);

const MainSection = () => (
  <section className="relative z-10 bg-white pb-20 sm:pb-24 xl:pb-0">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-x-8 gap-y-16 lg:gap-y-0">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[2/1] relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              className="rounded-2xl object-cover shadow-2xl"
              src="/assets/image4.webp"
              alt="A professional handyman working on a home repair project"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-[3/2] w-2/3 absolute -bottom-16 -right-8 translate-y-1/4 hidden lg:block">
            <Image
              className="rounded-2xl object-cover shadow-2xl border-4 border-white"
              src="/assets/image7.webp"
              alt="Close-up of a repair tool being used"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 lg:pt-8">
          <div className="relative isolate">
            <div className="arima text-base sm:text-lg font-medium leading-7 sm:leading-8 text-gray-900">
              <p>{`Our household repair services cover a wide range of needs, from minor fixes to major renovations. We pride ourselves on our attention to detail and commitment to quality workmanship.`}</p>
              <p className="mt-4">{`With years of experience in the industry, our team of skilled professionals is equipped to handle any repair challenge. We use top-quality materials and innovative techniques to ensure lasting results.`}</p>
              <p className="mt-4">{`Whether you need plumbing repairs, electrical work, carpentry, or general maintenance, we're here to help restore your home to its best condition.`}</p>
              <h2 className="nunito text-3xl mt-8 mb-2">Areas we serve</h2>
              <ul className="list-disc list-inside">
                <li>Madison</li>
                <li>Oregon</li>
                <li>Fitchburg</li>
                <li>Verona</li>
                <li>Sun Prairie</li>
                <li>De Forest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HouseholdRepairs = () => {
  return (
    <>
      <Head>
        <title>{`About Our Household Repairs Services | Your Company Name`}</title>
        <meta name="description" content="Learn about our professional household repair services. We serve Madison, Oregon, Fitchburg, Verona, Sun Prairie, and De Forest with quality home maintenance and improvements." />
        <link rel="canonical" href="https://handyman-template-site.netlify.app/about" />
      </Head>
      <main className="bg-white">
        <CoverPhoto />
        <MainSection />
        <CTASection />
      </main>
    </>
  );
}

export default HouseholdRepairs;