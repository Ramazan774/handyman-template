import React from 'react';

const StarIcon = ({ filled }) => (
  <svg 
    className={`h-5 w-5 flex-none ${filled ? 'text-indigo-600' : 'text-gray-300'}`} 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    <div className="flex" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
    <span className="sr-only">{rating} out of 5 stars</span>
  </div>
);

const Testimonial = ({ quote, author, role, rating }) => (
  <figure className="mx-auto max-w-2xl">
    <StarRating rating={rating} />
    <blockquote className="mt-10 text-xl font-medium leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
      <p>{quote}</p>
    </blockquote>
    <figcaption className="mt-10 flex items-center gap-x-6">
      <div className="text-sm leading-6">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="mt-0.5 text-gray-600">{role}</div>
      </div>
    </figcaption>
  </figure>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The team at Madison Handyman Services did an exceptional job with my home repairs. Their attention to detail and professionalism were outstanding. I could not be happier with the results!",
      author: "Sarah Johnson",
      role: "Homeowner",
      rating: 5
    },
    {
      quote: "I have used many handyman services before, but none compare to the quality and reliability of this team. They are my go-to for all home improvement projects now.",
      author: "Mike Thompson",
      role: "Homeowner",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl">
        <header className="text-center mb-16">
          <p className="arima text-base font-semibold text-blue-800 tracking-wide">Our Testimonials</p>
          <h2 id="testimonials-heading" className="arima mt-2 text-4xl font-extrabold text-black sm:text-7xl">Our Customers Like Us</h2>
          <p className="raleway mt-4 max-w-2xl mx-auto text-xl text-gray-900">
            {`At Madison Handyman Services, we've been proudly serving the Madison, WI area for over a decade. Our team of skilled professionals is dedicated to delivering top-notch home repair and improvement services to our community. From small fixes to major renovations, we're committed to excellence in every project we undertake.`}
          </p>
        </header>
        <div className="nunito grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;