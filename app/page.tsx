import ServicesSection from '@/sections/Home/ServicesSection';
import HeroSection from '@/sections/Home/HeroSection';
import MainDetailsSection from '@/sections/MainDetailsSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="container">
        <ServicesSection />
        {/* <div className="divider"></div>
        <MainDetailsSection /> */}
      </div>
    </main>
  );
}
