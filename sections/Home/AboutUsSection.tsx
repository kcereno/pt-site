import React from 'react';

const AboutUs = () => {
  return (
    <section className="min-w-full bg-base-200">
      <div className="section-container">
        <h2>About Us</h2>
        <div className="flex flex-col md:flex-row md:gap-5 md:mt-10 ">
          <div className="flex-1">
            <img
              src="http://www.procareptgroup.com/pro%20care%20website6.JPG"
              alt=""
              className="mt-5 rounded-lg md:mt-0 shadow-l "
            />
          </div>
          <div className="flex-1 my-auto">
            <p className="py-2 text-lg">
              Our team of highly trained professionals uses the latest healing
              technologies to restore you to pain-free health, quickly and
              easily. We thoroughly evaluate & treat all of the contributing
              root factors related to your issue. This includes, but is not
              limited to, your work and home stressors, overall body condition,
              nutrition, genetic & postural habits, emotional connections and
              patterns that are held in your muscles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
