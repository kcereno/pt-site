import React from 'react';

interface Props {
  mobile?: boolean;
  onClick?: () => void;
  className?: string;
}

const ScheduleAppointmentButton: React.FC<Props> = ({
  mobile,
  onClick,
  className,
}) => {
  const defaultClass = `my-auto btn btn-primary ${className}`;

  let mobileClass = '';
  if (mobile) {
    mobileClass = 'btn-block';
  }

  return (
    <button
      className={`${defaultClass} ${mobile ? mobileClass : ''}`}
      onClick={onClick}
    >
      Schedule Appointment
    </button>
  );
};

export default ScheduleAppointmentButton;
