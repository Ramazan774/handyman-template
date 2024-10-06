import { Suspense, lazy } from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

// Lazy load components that are not immediately visible
const ContentSection = lazy(() => import('../components/ContentSection'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const GallerySection = lazy(() => import('../components/Gallery'));
const FAQ = lazy(() => import('../components/FAQ'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Handyman Services | Your Company Name</title>
        <meta name="description" content="Expert handyman services in Madison, WI. We offer drywall repair, HVAC maintenance, TV mounting, and more. Quality craftsmanship and reliable service." />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeatureSection />
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
          <ContentSection />
          <GallerySection />
          <FAQ />
        </Suspense>
        <CTASection />
      </main>
    </>
  );
}