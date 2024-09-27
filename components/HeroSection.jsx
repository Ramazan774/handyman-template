import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="lg:container lg:mx-52">
    <div className="arima flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col lg:mt-12 sm:mt-12 sm:mb-8 justify-center lg:pr-8">
        <h1 className="nunito text-sm font-medium mt-16 text-blue-800">Handyman Business</h1>
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4">Handyman Service Experts</h2>
        <div className="space-y-4 nunito font-sans text-base lg:text-lg">
          <p className="mb-2">
            We offer a wide range of expert handyman services throughout Madison, WI and nearby areas.
          </p>
          <p className="mb-2">
            Our skilled team handles everything from basic home repairs to intricate renovations:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Drywall patching</li>
            <li>Painting touch-ups</li>
            <li>Fixture installations</li>
            <li>Thorough deck maintenance</li>
          </ul>
          <p>
            Madison Handyman Solutions is your go-to partner for transforming your house into a more comfortable and functional living space.
          </p>
        </div>
        <div className="flex flex-col mb-10 mt-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/contact" className="px-6 py-2 border border-blue-800 text-white bg-blue-700 hover:bg-blue-900 rounded-2xl transition duration-300 text-center">
            Get A Quote
          </a>
          <a href="/services/drywall-repair" className="px-6 py-2 text-blue-800 hover:bg-blue-500 hover:text-white hover:rounded-2xl text-center">
            Our Services
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mt-0">
        <Image src="/assets/image5.webp" alt="Hero image" className="w-full h-auto rounded-lg" width={1250} height={1250}  />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;