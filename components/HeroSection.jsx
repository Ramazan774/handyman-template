import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="lg:container lg:mx-auto px-4 lg:px-8 py-24 lg:py-32" aria-labelledby="hero-heading">
      <div className="arima flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center lg:pr-8">
          <p className="nunito text-sm font-medium text-blue-800">Handyman Business</p>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Handyman Service Experts</h1>
          <div className="space-y-4 nunito font-sans text-base lg:text-lg">
            <p>
              We offer a wide range of expert handyman services throughout Madison, WI and nearby areas.
            </p>
            <p>
              Our skilled team handles everything from basic home repairs to intricate renovations:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2" aria-label="Our services">
              <li>Drywall patching</li>
              <li>Painting touch-ups</li>
              <li>Fixture installations</li>
              <li>Thorough deck maintenance</li>
            </ul>
            <p>
              Madison Handyman Solutions is your go-to partner for transforming your house into a more comfortable and functional living space.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <Link href="/contact" className="px-6 py-2 border border-blue-800 text-white bg-blue-700 hover:bg-blue-900 rounded-2xl transition duration-300 text-center">
              Get A Quote
            </Link>
            <Link href="/services/drywall-repair" className="px-6 py-2 text-blue-800 hover:bg-blue-500 hover:text-white rounded-2xl transition duration-300 text-center">
              Our Services
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image 
            src="/assets/image5.webp" 
            alt="Handyman working on a home improvement project" 
            className="w-full h-auto rounded-lg" 
            width={1250} 
            height={1250}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;