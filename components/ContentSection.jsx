import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContentSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 pr-8">
            <p className="arima text-sm text-blue-800 mb-2">Professional and Reliable</p>
            <h2 id="about-heading" className="arima text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{`Handyman Business in Madison, WI`}</h2>
            <p className="raleway text-lg text-gray-700 mb-8">
             {` Welcome to Madison's premier handyman service, where quality craftsmanship meets unparalleled customer care. 
              For over a decade, we've been the go-to solution for homeowners and businesses alike, tackling everything from 
              minor repairs to major renovations. Our team of skilled professionals brings expertise, reliability, and attention 
              to detail to every job, ensuring your space not only looks great but functions flawlessly.`}
            </p>
            <p className="raleway text-lg text-gray-700 mb-8">
              {`We pride ourselves on our prompt service, transparent pricing, and ability to handle a wide range of projects, 
              from plumbing and electrical work to carpentry and painting. With our deep roots in the Madison community, 
              we understand the unique needs of local residents and businesses, allowing us to provide tailored solutions 
              that exceed expectations. Trust us to transform your to-do list into done, and experience the peace of mind 
              that comes with knowing your property is in expert hands.`}
            </p>
            <Link href="/contact" className="arima inline-block px-6 py-3 bg-blue-700 text-white rounded-2xl hover:bg-blue-900 transition duration-300" aria-label="Get a quote for our handyman services">
              Get A Quote
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="relative inline-block">
              <Image 
                src="/assets/image6.webp" 
                alt="Professional handyman working on a home repair project" 
                width={1400} 
                height={1400} 
                className="rounded-s-full border-8 border-white shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-200 rounded-full p-16 border-4 border-white shadow-md" aria-hidden="true">
                <p className="raleway text-blue-800 font-bold text-xl">10 Years Of<br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;