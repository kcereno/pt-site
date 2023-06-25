import React from 'react';

const FooterHours = () => {
  const days = [
    { day: 'Monday', hours: '9AM - 6PM' },
    { day: 'Tuesday', hours: '9AM - 6PM' },
    { day: 'Wednesday', hours: '9AM - 6PM' },
    { day: 'Thursday', hours: '9AM - 6PM' },
    { day: 'Friday', hours: '9AM - 6PM' },
    { day: 'Saturday', hours: 'CLOSED' },
    { day: 'Sunday', hours: 'CLOSED' },
  ];

  return (
    <section
      id="hours"
      className="flex flex-col w-auto gap-1 text-gray"
    >
      {days.map(({ day, hours }, index) => (
        <div
          className="flex"
          key={index}
        >
          <div className="font-bold w-36">{day}</div>
          <div className={`${hours === 'CLOSED' ? 'font-bold' : ''}`}>
            {hours}
          </div>
          {/* <div className="lg:hidden"></div> */}
        </div>
      ))}
    </section>
  );
};

export default FooterHours;
