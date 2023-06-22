import ClientTestimonials from '@/components/ClientTestimonials/ClientTestimonials';
import React from 'react';

const ClientTestimonialsSection = () => {
  return (
    <section className="p-section">
      <div className="content_container">
        <h2>
          Client <span className="bold-heading">Testimonials</span>
        </h2>
        <div className="mt-10 ">
          <ClientTestimonials />
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
