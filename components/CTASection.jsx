import Image from 'next/image';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-white py-8 sm:py-12" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 id="cta-heading" className="raleway text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Need a helping hand?
              <span className="raleway block text-blue-800">Our expert handymen are ready!</span>
            </h2>
            <div className="mt-4 lg:mt-6">
              <Link 
                href="/contact"
                className="arima inline-block bg-blue-700 px-3.5 py-2.5 text-sm font-medium rounded-2xl text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
                aria-label="Get a quote for our handyman services"
              >
                Get A Quote
              </Link>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-8 flex-shrink-0">
            <Image
              src="/assets/handymanicon.webp"
              alt="Illustration of a handyman with tools"
              width={400}
              height={400}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;