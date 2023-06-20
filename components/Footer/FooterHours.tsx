import React from 'react';

const FooterHours = () => {
  const days = [
    { day: 'Monday', hours: '9AM - 5PM' },
    { day: 'Tuesday', hours: '9AM - 5PM' },
    { day: 'Wednesday', hours: '9AM - 5PM' },
    { day: 'Thursday', hours: '9AM - 5PM' },
    { day: 'Friday', hours: '9AM - 5PM' },
    { day: 'Saturday', hours: 'CLOSED' },
    { day: 'Sunday', hours: 'CLOSED' },
  ];

  return (
    <div className="flex flex-col gap-1">
      {days.map(({ day, hours }, index) => (
        <div
          className="grid grid-cols-3"
          key={index}
        >
          <div className="flex flex-grow font-bold">{day}</div>
          <div className="flex flex-grow">{hours}</div>
          <div className="flex flex-grow"></div>
        </div>
      ))}
    </div>
  );
};

export default FooterHours;
