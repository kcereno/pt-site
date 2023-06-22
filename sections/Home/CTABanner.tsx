import React from 'react';

const CTABanner = () => {
  const DUMMY_TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  return (
    <section
      id="cta"
      className="py-section bg-base-200"
    >
      <div className="content_container">
        <h2 className="text-center">{DUMMY_TEXT}</h2>
        <div className="flex justify-center mt-10">
          <button className="text-center btn btn-wide btn-primary">
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
