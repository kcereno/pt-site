import ClientTestimonials from '@/components/ClientTestimonials/ClientTestimonials';
import React from 'react';

const ClientTestimonialsSection = () => {
  return (
    <section className="py-section container-fluid">
      <h3>
        Client <span className="bold-heading">Testimonials</span>
      </h3>
      <div className="mt-5 ">
        <ClientTestimonials />
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
