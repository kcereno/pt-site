import React from 'react';

import Link from 'next/link';

interface Props {
  mobile?: boolean;

  className?: string;
}

const ScheduleAppointmentButton: React.FC<Props> = ({ mobile, className }) => {
  const buttonClass = `my-auto btn btn-primary ${className} ${
    mobile ? 'btn-block' : ''
  }`;

  return (
    <Link href="/contact">
      <button className={buttonClass}>Schedule Appointment</button>
    </Link>
  );
};

export default ScheduleAppointmentButton;
