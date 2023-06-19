import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const NavDetails = () => {
  const iconClass = 'h-8 w-8 ';
  const label = 'font-bold text-md';
  const detail = 'text-sm';
  const dividerClass =
    ' mt-0 divider divider-vertical lg:divider-horizontal   ';

  return (
    <div className="mb-5 text-gray-400 lg:flex lg:justify-between">
      {/* Location */}
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div>
            <div className="p-3">
              <FaHome className={iconClass} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className={label}>Visit Our Location</p>
            <p className={detail}>123 45th St. Astoria NY</p>
          </div>
        </div>
      </div>
      <div className={dividerClass}></div>
      {/* Phone */}
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div>
            <div className="p-3">
              <FaPhone className={iconClass} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className={label}>Give Us a Call</p>
            <p className={detail}>(212) 123-4567</p>
          </div>
        </div>
      </div>
      <div className={dividerClass}></div>
      {/* Email */}
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div>
            <div className="p-3">
              <FaEnvelope className={iconClass} />
            </div>
          </div>

          <div className="flex flex-col">
            <p className={label}>Send Us a Message</p>
            <p className={detail}>email@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={dividerClass}></div>
      {/* Hours */}
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div>
            <div className="p-3">
              <FaClock className={iconClass} />
            </div>
          </div>
          <div className="divider "></div>
          <div className="flex flex-col justify-center">
            <p className={label}>Opening Hours</p>
            <p className={detail}>Mon - Friday: 8AM - 5PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDetails;
