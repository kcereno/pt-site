import ServicesSection from '@/sections/Home/ServicesSection';
import HeroSection from '@/sections/Home/HeroSection';
import AboutUsSection from '@/sections/Home/AboutUsSection';
import AdvantagesSection from '@/sections/Home/AdvantagesSection';

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <ServicesSection />

      <AboutUsSection />
      <AdvantagesSection />
    </main>
  );
}
