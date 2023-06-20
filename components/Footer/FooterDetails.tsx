import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import NavDetailEntry from '../Nav/NavDetailEntry';

const FooterDetails = () => {
  return (
    <>
      <div className="flex flex-col justify-between lg:flex-row ">
        <NavDetailEntry
          icon={<FaHome className="w-8 h-8 " />}
          label="Visit Our Location"
          detail="123 45th St. New York NY"
        />
        <div className="mt-0 divider divider-vertical lg:hidden"></div>
        <NavDetailEntry
          icon={<FaPhone className="w-8 h-8 " />}
          label="Give Us a Call"
          detail="(212) 123-4567"
        />
        <div className="mt-0 divider divider-vertical lg:hidden"></div>
        <NavDetailEntry
          icon={<FaEnvelope className="w-8 h-8 " />}
          label="Send Us a Message"
          detail="123@gmail.com"
        />
        <div className="mt-0 divider divider-vertical lg:hidden"></div>
      </div>
    </>
  );
};

export default FooterDetails;
