import React from 'react';
import FooterDetails from './Footer/FooterDetails';

const Footer = () => {
  return (
    <footer className="py-10 bg-base-300 text-base-content ">
      <div className="mx-2 lg:max-w-[1300px] lg:mx-auto">
        <div className="">
          <FooterDetails />
        </div>
        <div className="hidden divider lg:flex"></div>
      </div>
    </footer>
  );
};

export default Footer;
