import React from "react";
import Image from "next/image";
import Head from "next/head";
import CTASection from "@/components/CTASection";

const CoverPhoto = ({ title }) => (
    <header className="relative h-80 lg:h-96">
      <Image
        src="/assets/image8.webp"
        alt="Photo of a room with a tv"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="arima text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center z-10 drop-shadow-lg">
          {title}
        </h1>
      </div>
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20" aria-hidden="true">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </header>
);

const MainSection = ({ description, areas }) => (
    <section className="relative z-10 bg-white pb-20 sm:pb-24 xl:pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-x-8 gap-y-16 lg:gap-y-0">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[2/1] relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                className="rounded-2xl object-cover shadow-2xl"
                src="/assets/image9.webp"
                alt="HVAC technician working on an air conditioning unit"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="aspect-[3/2] w-2/3 absolute -bottom-16 -right-8 translate-y-1/4 hidden lg:block">
              <Image
                className="rounded-2xl object-cover shadow-2xl border-4 border-white"
                src="/assets/image2.webp"
                alt="Close-up of HVAC system components"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 lg:pt-8">
            <div className="relative isolate">
              <div className="arima text-lg font-medium leading-8 text-gray-900 sm:text-xl sm:leading-9">
                <p>{description}</p>
                <h2 className="nunito text-3xl mt-8 mb-4">Areas we serve</h2>
                <ul className="list-disc list-inside">
                  {areas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

const HVACRepair = () => {
    const title = "HVAC Repairs";
    const description = `Our expert HVAC repair service ensures your heating, ventilation, and air conditioning systems 
    are running efficiently and effectively. We provide comprehensive diagnostics, repairs, and maintenance for all types 
    of HVAC systems. Our skilled technicians are equipped to handle everything from simple fixes to complex system overhauls, 
    ensuring your home or business maintains optimal comfort year-round.`;
    const areas = ["Madison", "Oregon", "Fitchburg", "Verona", "Sun Prairie", "De Forest"];

    return (
        <>
            <Head>
                <title>{`${title} Services | Your Handyman Business`}</title>
                <meta name="description" content={`Professional ${title.toLowerCase()} services in Madison, WI. ${description.slice(0, 150)}...`} />
                <link rel="canonical" href="https://yourwebsite.com/services/hvac-repair" />
            </Head>
            <main className="bg-white">
                <CoverPhoto title={title} />
                <MainSection description={description} areas={areas} />
                <CTASection />
            </main>
        </>
    );
}

export default HVACRepair;