import React from 'react';

const CTABanner = () => {
  const DUMMY_TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  return (
    <section
      id="cta"
      className="section__container bg-base-200"
    >
      <div className="section__content">
        <h2 className="text-center">{DUMMY_TEXT}</h2>
        <div className="flex justify-center mt-10">
          <button className="text-center btn btn-wide btn-neutral">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
