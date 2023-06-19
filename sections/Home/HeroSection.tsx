import React from 'react';
import verticalImage from '../public/assets/images/hero/hero-vertical.jpg';

const HeroSection = () => {
  const bgImageLink = 'http://via.placeholder.com/400x400';
  const headerText = 'Restore. Rebuild. Renew.';
  const subheaderText = "Astoria's Premier Physical Therapy Clinic since 2001";

  return (
    <section
      id="hero"
      className="bg-cover h-96 hero bg-hero-default md:bg-hero-horizontal md:h-[700px] "
    >
      <div className="hero-overlay bg-opacity-70 "></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="">
          <h1 className="mb-5 ">{headerText}</h1>
          <p className="mb-5 hero-subheader">{subheaderText}</p>
          <button className="btn btn-md">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
