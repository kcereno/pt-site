import React from 'react';
import { IoLocationSharp, IoCallSharp } from 'react-icons/io5';

const NavDetails = () => {
  const address = '123 Fake Street New York , NY 11109';
  const phoneNumber = '(212) 414-2144';

  // Classes
  const navDetail = 'flex gap-2 align-center text-sm my-auto';
  const navDetailIcon = 'my-auto';

  return (
    <div className="flex flex-col justify-between sm:flex-row sm:justify-center md:justify-end md:gap-10">
      <div className="flex flex-col gap-2 mx-6 xs:flex-row xs:mx-0 xs:justify-around sm:flex-col md:flex-row md:gap-10 ">
        <div className={navDetail}>
          <IoLocationSharp className={navDetailIcon} />
          <span>{address}</span>
        </div>
        <div className={navDetail}>
          <IoCallSharp className={navDetailIcon} />
          <span>{phoneNumber}</span>
        </div>
      </div>
      <div className="mx-4 my-auto mt-4 text-center sm:mt-0">
        <button className="btn btn-block btn-neutral md:btn-md ">
          Request Appointment
        </button>
      </div>
    </div>
  );
};

export default NavDetails;
