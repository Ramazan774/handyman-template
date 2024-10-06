import Link from 'next/link';
import Image from 'next/image';

const ServiceCard = ({ imageSrc, title, description, serviceName }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 hover:scale-110 duration-300">
    <Image 
      src={imageSrc} 
      alt="" 
      className="w-full h-48 object-cover" 
      width={400} 
      height={300} 
      layout="responsive"
    />
    <div className="p-6">
      <h3 className="arima text-xl font-bold text-blue-800 mb-2">
        <Link href={`/services/${serviceName}`} className="hover:text-blue-500 block">
          {title}
        </Link>
      </h3>
      <p className="raleway text-gray-600">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/assets/image2.webp",  
      title: "Drywall Repair",
      description: "Expert drywall repair services to restore your walls to their original condition.",
      serviceName: "drywall-repair"
    },
    {
      imageSrc: "/assets/image2.webp", 
      title: "Household Repairs",
      description: "Comprehensive household repair services for all your home maintenance needs.",
      serviceName: "household-repairs"
    },
    {
      imageSrc: "/assets/image3.webp", 
      title: "HVAC Repair",
      description: "Professional HVAC repair and maintenance to keep your home comfortable year-round.",
      serviceName: "hvac-repair"
    },
    {
      imageSrc: "/assets/image1.webp", 
      title: "TV Mounting",
      description: "Secure and professional TV mounting services for optimal viewing experiences.",
      serviceName: "tv-mounting"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <p className="arima text-center text-sm font-bold text-blue-800 mb-4">Our Services</p>
        <h2 id="services-heading" className='arima text-center text-4xl font-bold text-black mb-4'>Comprehensive Handyman Services</h2>
        <p className="nunito text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We offer a wide range of services designed to keep your home or business running smoothly. From electrical and plumbing repairs to carpentry, painting, and general maintenance, 
          our skilled team is ready to tackle any project, big or small. We take pride in delivering prompt, professional service with a focus on quality workmanship and customer satisfaction.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {services.map((service, index) => (
            <li key={index}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;