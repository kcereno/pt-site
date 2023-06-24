import ContactForm from '@/components/ContactForm';
import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import React from 'react';

const ContactPage = () => {
  return (
    <section>
      <PageHeadingBanner
        title="Contact Us"
        subtext="Feel free to ask any questions over the phone, or get in touch via our contact form below"
      />
      <div className="py-10 container-fluid">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
