"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href) => pathname === href ? 'text-blue-800' : 'text-black hover:text-blue-800';

  return (
    <nav className="bg-white shadow-xl fixed top-[35px] left-0 right-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 sm:h-20">
          <div className="flex items-center">
          <Link href="/">
              <Image src="/assets/logo.webp" alt="Logo" width={50} height={50} className="sm:w-[70px] sm:h-[70px]" />
            </Link>
          </div>
          <div className="hidden lg:flex justify-center flex-1 items-center">
            <div className="arima flex space-x-4 lg:space-x-8">
              <Link href="/" className={`${isActive('/')} font-bold px-2 py-1 text-lg lg:text-2xl`}>
                Home
              </Link>
              <Link href="/about" className={`${isActive('/about')} font-bold px-2 py-1 text-lg lg:text-2xl`}>
                About Us
              </Link>
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                  className={`${pathname.startsWith('/services') ? 'text-blue-800' : 'text-black hover:text-blue-800'} font-bold px-2 py-1 text-lg lg:text-2xl focus:outline-none flex items-center`}
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 lg:h-5 lg:w-5 transform transition-transform duration-300 ease-in-out ${isServicesHovered ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 focus:outline-none invisible group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    <Link href="/services/drywall-repair" className={`block px-4 py-2 text-sm ${isActive('/services/drywall-repair')} hover:bg-gray-100`}>Drywall Repair</Link>
                    <Link href="/services/household-repairs" className={`block px-4 py-2 text-sm ${isActive('/services/household-repairs')} hover:bg-gray-100`}>Household Repairs</Link>
                    <Link href="/services/hvac-repair" className={`block px-4 py-2 text-sm ${isActive('/services/hvac-repair')} hover:bg-gray-100`}>HVAC Repairs</Link>
                    <Link href="/services/tv-mounting" className={`block px-4 py-2 text-sm ${isActive('/services/tv-mounting')} hover:bg-gray-100`}>TV Mounting</Link>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className={`${isActive('/gallery')} font-bold px-2 py-1 text-lg lg:text-2xl`}>
                Gallery
              </Link>
              <Link href="/contact" className={`${isActive('/contact')} font-bold px-2 py-1 text-lg lg:text-2xl`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '82px'}}
      >
        <div className="arima px-2 pb-3 space-y-2">
          <Link href="/" className={`block font-bold px-3 py-4 text-4xl ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={`block font-bold px-3 py-4 text-4xl ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
          <button
            onClick={toggleServices}
            className={`w-full text-left font-bold px-3 py-4 text-4xl focus:outline-none flex items-center justify-between ${pathname.startsWith('/services') ? 'text-blue-800' : 'text-black hover:text-blue-800'}`}
          >
            Services
            <svg
              className={`ml-2 h-6 w-6 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-6 space-y-2 bg-white shadow-md rounded-md">
              <Link href="/services/drywall-repair" className={`block px-3 py-2 text-2xl ${isActive('/services/drywall-repair')}`} onClick={closeMenu}>Drywall Repair</Link>
              <Link href="/services/household-repairs" className={`block px-3 py-2 text-2xl ${isActive('/services/household-repairs')}`} onClick={closeMenu}>Household Repairs</Link>
              <Link href="/services/hvac-repair" className={`block px-3 py-2 text-2xl ${isActive('/services/hvac-repair')}`} onClick={closeMenu}>HVAC Repair</Link>
              <Link href="/services/tv-mounting" className={`block px-3 py-2 text-2xl ${isActive('/services/tv-mounting')}`} onClick={closeMenu}>TV Mounting</Link>
            </div>
          )}
          <Link href="/gallery" className={`block font-bold px-3 py-4 text-4xl ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" className={`block font-bold px-3 py-4 text-4xl ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;