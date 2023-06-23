import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="">
      <PageHeadingBanner
        title="About Us"
        subtext="Helping patients regain their movement since 2001"
      />
      <div className="py-10 container-fluid">
        <h2>
          Our <span className="bold-heading">Vision</span>
        </h2>
      </div>
    </section>
  );
};

export default AboutPage;
