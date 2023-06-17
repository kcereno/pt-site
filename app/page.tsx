import FeaturesSection from '@/sections/FeaturesSection';
import HeroSection from '@/sections/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
