import React from 'react';
import Image from "next/image";
import Head from 'next/head';
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Your Handyman Business</title>
                <meta name="description" content="Get in touch with our skilled handymen for all your home repair and maintenance needs in Madison, WI. We're here to make your life easier and your home better." />
                <link rel="canonical" href="https://yourwebsite.com/contact" />
            </Head>
            <main className="bg-white">
                <header className="relative h-80 lg:h-96">
                    <Image
                        src="/assets/image8.webp"
                        alt="Contact us background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h1 className="arima text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center z-10 drop-shadow-lg">
                            Contact Us
                        </h1>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20" aria-hidden="true">
                            <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                    </div>
                </header>

                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <Image
                                src="/assets/image13.webp"
                                alt="Handyman tools and equipment"
                                width={500}
                                height={300}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <p className="raleway text-base mt-4">
                                Get in touch with our skilled handymen for all your home repair and maintenance needs. We're here to make your life easier and your home better.
                            </p>
                            <address className="mt-6 space-y-4 not-italic">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 text-blue-700 mr-2" aria-hidden="true" />
                                    <a href="tel:+1234567890" className="raleway text-base hover:underline">(123) 456-7890</a>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 text-blue-700 mr-2" aria-hidden="true" />
                                    <a href="mailto:info@example.com" className="raleway text-base hover:underline">info@example.com</a>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 text-blue-700 mr-2" aria-hidden="true" />
                                    <span className="raleway text-base">Madison, WI</span>
                                </div>
                            </address>
                        </div>
                        <div>
                            <h2 className="arima text-2xl font-bold mb-4">Send Us a Message</h2>
                            <form className="space-y-4" data-netlify="true" name="contact" method="POST">
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <label htmlFor="fullName" className="block raleway text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" required placeholder="Enter Your Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block raleway text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Enter Your Phone Number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block raleway text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" required placeholder="Enter Your Email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block raleway text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={4} required placeholder="Enter Your Message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="arima w-full bg-blue-700 px-4 py-2 text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactPage;