import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import NavDetailEntry from './NavDetailEntry';

const NavDetails = () => {
  // Classes
  const iconClass = 'h-8 w-8 ';
  const dividerClass = 'mt-0 divider divider-vertical lg:divider-horizontal';

  // Data
  const address = '4111 30th Ave, Astoria, NY 11103';
  const phone = '(718) 274-4400';
  const email = 'info@procareptgroup.com';
  const hours = 'Mon - Friday: 9AM - 6PM';

  return (
    <div className="mb-5 text-gray-400 lg:flex lg:justify-between">
      <NavDetailEntry
        icon={<FaHome className={iconClass} />}
        label="Visit Our Location"
        detail={address}
      />

      <div className={dividerClass}></div>
      <NavDetailEntry
        icon={<FaPhone className={iconClass} />}
        label="Give Us a Call"
        detail={phone}
      />

      <div className={dividerClass}></div>
      <NavDetailEntry
        icon={<FaEnvelope className={iconClass} />}
        label="Send Us a Message"
        detail={email}
      />

      <div className={dividerClass}></div>
      <NavDetailEntry
        icon={<FaClock className={iconClass} />}
        label="Opening Hours"
        detail={hours}
      />
    </div>
  );
};

export default NavDetails;
