import React from 'react';
import FooterDetails from './FooterDetails';
import Link from 'next/link';
import FooterHours from './FooterHours';

const Footer = () => {
  return (
    <footer className="min-w-full bg-base-300 text-base-content">
      <div className="pt-20 lg:max-w-[1300px] lg:mx-auto">
        <div className="mx-4">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between md:mx-4">
            <div className="lg:w-2/3 md:flex-1">
              <h3 className="bold-heading">About Us</h3>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                facilis repellendus. Provident unde omnis necessitatibus sint,
                est asperiores qui fugit nulla animi numquam nemo commodi
                dignissimos cum laboriosam praesentium aspernatur.
              </div>
              <button className="mt-5 btn btn-neutral">
                Book An Appointment
              </button>
            </div>

            <div className="mt-10 md:mt-0">
              <h3 className="bold-heading">Opening Hours</h3>
              <div className="mt-3">
                <FooterHours />
              </div>
            </div>
          </div>
          <div className="pt-20 pb-5 text-sm text-center">
            © Copyright 2023 PT Clinic by KC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
