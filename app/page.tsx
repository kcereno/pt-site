import ServicesSection from '@/sections/Home/ServicesSection';
import HeroSection from '@/sections/Home/HeroSection';
import AboutUsSection from '@/sections/Home/AboutUsSection';
import AdvantagesSection from '@/sections/Home/AdvantagesSection';
import CTABanner from '@/sections/Home/CTABanner';
import ClientTestimonialsSection from '@/sections/Home/ClientTestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <AdvantagesSection />
      <CTABanner />
      <ClientTestimonialsSection />
    </main>
  );
}
