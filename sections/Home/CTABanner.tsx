import React from 'react';

const CTABanner = () => {
  const DUMMY_TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  const text =
    'No matter whether your condition was caused by a sport, work accident or otherwise, we welcome the chance to serve you.';

  return (
    <section
      id="cta"
      className="bg-blue-400 py-section"
    >
      <div className="container-fluid">
        <p className="font-bold text-center text-white md:text-2xl lg:text-3xl">
          {text}
        </p>
        <div className="flex justify-center mt-10">
          <button className="text-center btn-secondary btn">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
