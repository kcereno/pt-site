import React from 'react';

import FooterHours from './FooterHours';
import { text } from 'stream/consumers';

const Footer = () => {
  const text =
    "We are Procare Physical Therapy: your go-to PT clinic in Astoria. Our dedicated team offers personalized care, advanced treatments, and a welcoming environment. Whether you need rehab, pain relief, or performance enhancement, we've got you covered. Experience the difference today.";
  return (
    <footer className="pt-20 bg-gray-300 text-base-content">
      <div className="container-fluid">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between ">
          <div className="lg:w-2/3 md:flex-1">
            <h6 className="bold-heading">About Us</h6>
            <div className="mt-3 max-w-prose">{text}</div>
            <button className="mt-5 btn btn-primary">
              Schedule Appointment
            </button>
          </div>

          <div className="mt-10 md:mt-0">
            <h6 className="bold-heading">Opening Hours</h6>
            <div className="mt-3">
              <FooterHours />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-5 text-sm text-center">
          © Copyright 2023 PT Clinic by KC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
