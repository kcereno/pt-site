import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-20 footer footer-center bg-base-300 text-base-content">
      <div className="flex flex-col gap-10 py-10">
        <div className="">123 fakestreet</div>
        <div className="">
          <p>Open Monday to Friday</p>
          <p>7am to 8pm</p>
        </div>
        <div className="">
          <p>email</p>
          <p>phone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
