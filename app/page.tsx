import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';
import ContentSection from '../components/ContentSection';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import GallerySection from '../components/Gallery';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeatureSection />
        <Testimonials />
        <ContentSection />
        <GallerySection />
        <FAQ />
        <CTASection />
      </div>
    </main>
  );
}
