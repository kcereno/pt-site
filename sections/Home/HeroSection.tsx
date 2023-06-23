import React from 'react';

const HeroSection = () => {
  const headerText = 'Restore. Rebuild. Renew.';
  const subheaderText = "Astoria's Premier Physical Therapy Clinic";

  const DUMMY_HEADER = 'Lorem, ipsum dolor';
  const DUMMY_SUBHEADER =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  return (
    <section
      id="hero"
      className="bg-cover h-96 hero bg-hero-default md:bg-hero-horizontal md:h-[700px] "
    >
      <div className="hero-overlay bg-opacity-70 "></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="">
          <h1 className="mb-5 hero-text ">{headerText}</h1>
          <p className="mb-5 hero-subheader">{subheaderText}</p>
          <button className="btn btn-md btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
