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
    <div className="container-fluid">
      <div className="mb-5 text-gray-400 lg:flex lg:justify-between">
        <NavDetailEntry
          icon={<FaHome className={iconClass} />}
          label="Visit Our Location"
          detail={address}
          url="https://goo.gl/maps/cJf2Sa8bh6KNxuX38"
        />

        <div className={dividerClass}></div>
        <NavDetailEntry
          icon={<FaPhone className={iconClass} />}
          label="Give Us a Call"
          detail={phone}
          url="tel:7182744400"
        />

        <div className={dividerClass}></div>
        <NavDetailEntry
          icon={<FaEnvelope className={iconClass} />}
          label="Send Us a Message"
          detail={email}
          url="mailto:info@procareptgroup.com"
        />

        <div className={dividerClass}></div>
        <NavDetailEntry
          icon={<FaClock className={iconClass} />}
          label="Opening Hours"
          detail={hours}
          url="#hours"
        />
      </div>
    </div>
  );
};

export default NavDetails;
