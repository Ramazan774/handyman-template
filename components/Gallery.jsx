"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} 
                bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
);

const ImageModal = ({ src, alt, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="max-w-4xl w-full p-4 relative">
        <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto rounded-lg" />
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ArrowButton direction="left" onClick={onPrev} />
        <ArrowButton direction="right" onClick={onNext} />
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    '/assets/image1.webp',
    '/assets/image2.webp',
    '/assets/image3.webp',
    '/assets/image4.webp',
    '/assets/image5.webp',
    '/assets/image6.webp',
    '/assets/image7.webp',
    '/assets/image8.webp'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrev = useCallback(() => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="gallery-heading" className="raleway text-4xl sm:text-5xl lg:text-6xl font-semibold text-black text-center mb-8">
          See Some Of Our Work Examples
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={src} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Handyman project example ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleImageClick(index)}
                loading='lazy'
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/gallery" className="arima inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl shadow-sm text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors duration-200">
            See More
          </Link>
        </div>
      </div>
      {selectedImage !== null && (
        <ImageModal
          src={images[selectedImage]}
          alt={`Detailed view of handyman project ${selectedImage + 1}`}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

export default Gallery;