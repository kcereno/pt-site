import React from 'react';
import FooterDetails from './FooterDetails';
import Link from 'next/link';
import FooterHours from './FooterHours';

const Footer = () => {
  return (
    <footer className="min-w-full bg-base-300 text-base-content">
      <div className="py-10 lg:max-w-[1300px] lg:mx-auto">
        <div className="mx-4">
          <div className="flex flex-col"></div>
          <div className="about_us">
            <h2 className="bold-heading">About Us</h2>
            <div className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              facilis repellendus. Provident unde omnis necessitatibus sint, est
              asperiores qui fugit nulla animi numquam nemo commodi dignissimos
              cum laboriosam praesentium aspernatur.
            </div>
          </div>
          <div className="mt-10 lg:mt-0 links">
            <h2 className="bold-heading">Links</h2>
            <ul className="mt-3 list-disc list-inside">
              <li className="">
                <Link href="/">About Us</Link>{' '}
              </li>
              <li className="">
                <Link href="/">Services</Link>{' '}
              </li>
              <li className="">
                <Link href="/">Resources</Link>{' '}
              </li>

              <li className="">
                <Link href="/">Contact</Link>{' '}
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="bold-heading">Opening Hours</h2>
            <div className="mt-3">
              <FooterHours />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
