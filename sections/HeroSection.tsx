import React from 'react';

const HeroSection = () => {
  const bgImageLink = 'http://via.placeholder.com/400x400';
  const headerText = 'Restore. Rebuild. Renew.';
  const subheaderText = "Astoria's Premier Physical Therapy Clinic since 2001";

  return (
    <section
      id="hero"
      className="min-h-[500px] hero"
      style={{ backgroundImage: `url(${bgImageLink})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{headerText}</h1>
          <p className="mb-5">{subheaderText}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
