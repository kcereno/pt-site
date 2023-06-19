import ClientTestimonialCarousel from '@/components/ClientTestimonialCarousel/ClientTestimonialCarousel';
import React from 'react';

const ClientTestimonials = () => {
  return (
    <section className="min-w-full">
      <div className="section-container">
        <div className="mx-4">
          <div className="">
            <h2>
              Client <span className="bold-heading">Testimonials</span>
            </h2>
            <div className="mt-10">
              <ClientTestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
