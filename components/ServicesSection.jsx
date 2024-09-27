import Link from 'next/link'; 
import Image from 'next/image';

const ServiceCard = ({ imageSrc, title, description, serviceName }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 hover:scale-110 duration-300">
    <Image src={imageSrc} alt={title} className="w-full h-48 object-cover" width={100} height={100} />
    <div className="p-6">
      <Link href={`/services/${serviceName}`} className="arima text-xl font-bold text-blue-800 hover:text-blue-500 mb-2 block">
        {title}
      </Link>
      <p className="raleway text-gray-600">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/assets/image2.webp",  
      title: "Drywall Repair",
      description: "Revitalize your pool with our expert resurfacing services, ensuring a smooth and durable finish.",
      serviceName: "drywall-repair"
    },
    {
      imageSrc: "/assets/image2.webp", 
      title: "Household Repairs",
      description: "Update your pool's look with our professional tile replacement and repair services.",
      serviceName: "household-repairs"
    },
    {
      imageSrc: "/assets/image3.webp", 
      title: "HVAC Repair",
      description: "Transform your pool area with our comprehensive deck refurbishing and renovation solutions.",
      serviceName: "hvac-repair"
    },
    {
      imageSrc: "/assets/image1.webp", 
      title: "TV Mounting",
      description: "Identify and fix pool leaks quickly with our advanced detection and repair techniques.",
      serviceName: "tv-mounting"
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="arima text-center text-sm font-bold text-blue-800 mb-4">Our Services</h2>
        <h1 className='arima text-center text-4xl font-bold text-black mb-4'>Comprehensive Handyman Services</h1>
        <p className="nunito text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We offer a wide range of services designed to keep your home or business running smoothly. From electrical and plumbing repairs to carpentry, painting, and general maintenance, 
        our skilled team is ready to tackle any project, big or small. We take pride in delivering prompt, professional service with a focus on quality workmanship and customer satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;