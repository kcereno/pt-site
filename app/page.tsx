import ServicesSection from '@/sections/Home/ServicesSection';
import HeroSection from '@/sections/Home/HeroSection';
import AboutUsSection from '@/sections/Home/AboutUsSection';

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <ServicesSection />
      <div className="flex">
        <AboutUsSection />
      </div>
    </main>
  );
}
