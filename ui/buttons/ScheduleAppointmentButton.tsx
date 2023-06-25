import React from 'react';

interface Props {
  mobile?: boolean;
  onClick?: () => void;
}

const ScheduleAppointmentButton = ({ mobile, onClick }: Props) => {
  const defaultClass = 'my-auto btn btn-primary';

  let mobileClass = '';
  if (mobile) {
    mobileClass = 'btn-block';
  }

  return (
    <button className={`${defaultClass} ${mobile ? mobileClass : ''}`}>
      Schedule Appointment
    </button>
  );
};

export default ScheduleAppointmentButton;
