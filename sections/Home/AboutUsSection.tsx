import React from 'react';

const AboutUs = () => {
  const imgSrc = 'http://www.procareptgroup.com/pro%20care%20website6.JPG';
  const aboutText =
    'Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health, quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors, overall body condition, nutrition, genetic & postural habits, emotional connections and patterns that are held in your muscles';
  const DUMMY_IMG_SRC = 'http://via.placeholder.com/640x360';

  return (
    <section className="bg-base-200 p-section">
      <div className="container">
        <h2>
          About <span className="bold-heading">Us</span>
        </h2>
        <div className="flex flex-col md:flex-row md:gap-5 md:mt-10 lg:gap-10 ">
          <div className="flex-1 md:self-center">
            <img
              src={DUMMY_IMG_SRC}
              alt=""
              className="mx-auto mt-5 rounded-lg md:mt-0 shadow-l "
            />
          </div>
          <div className="flex-1 my-auto">
            <p className="mt-5 text-lg lg:text-xl md:mt-0 ">{aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
