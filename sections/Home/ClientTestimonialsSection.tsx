import ClientTestimonials from '@/components/ClientTestimonials/ClientTestimonials';
import React from 'react';

const ClientTestimonialsSection = () => {
  return (
    <section className="container p-section">
      <h2>
        Client <span className="bold-heading">Testimonials</span>
      </h2>
      <div className="mt-10 ">
        <ClientTestimonials />
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
