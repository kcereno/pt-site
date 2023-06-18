import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const NavDetails = () => {
  const iconClass = 'h-8 w-8 ';
  const label = 'font-bold';
  const detail = 'text-sm';

  return (
    <div className="text-gray-400">
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
            <p className={detail}>123 fake street ny</p>
          </div>
        </div>
      </div>
      <div className="mt-2 divider "></div>
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
      <div className="mt-2 divider"></div>
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
      <div className="mt-2 divider"></div>
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
