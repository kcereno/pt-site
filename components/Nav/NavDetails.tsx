import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const NavDetails = () => {
  // Classes
  const iconClass = 'h-8 w-8 ';
  const label = 'font-bold text-md';
  const detail = 'text-sm';
  const dividerClass = ' mt-0 divider divider-vertical lg:divider-horizontal';

  // Data
  const address = '123 45th St. Astoria NY';
  const phone = '(212) 123-4567';
  const email = 'email@email.com';
  const hours = 'Mon - Friday: 8AM - 5PM';

  const details = [
    {
      icon: <FaHome className={iconClass} />,
      label: 'Visit Our Location',
      detail: address,
    },
    {
      icon: <FaPhone className={iconClass} />,
      label: 'Give Us a Call',
      detail: phone,
    },
    {
      icon: <FaEnvelope className={iconClass} />,
      label: 'Send Us a Message',
      detail: email,
    },
    {
      icon: <FaClock className={iconClass} />,
      label: 'Opening Hours',
      detail: hours,
    },
  ];

  return (
    <div className="mb-5 text-gray-400 lg:flex lg:justify-between">
      {details.map(({ icon, label, detail }) => (
        <>
          <div className={dividerClass}></div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div>
                <div className="p-3">{icon}</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className={label}>{label}</p>
                <p className={detail}>{detail}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default NavDetails;
