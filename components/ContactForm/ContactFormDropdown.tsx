'use client';
import React from 'react';

interface Props {
  inputRef: React.RefObject<HTMLSelectElement>;
}

const ContactFormDropdown = ({ inputRef }: Props) => {
  const reasonsForContact = [
    'Appointment Request',
    'Treatment Inquiry',
    'General Inquiry',
    'Insurance Coverage',
    'Referral Request',
    'Rehabilitation after Surgery',
    'Pain Management',
    'Sports Injury',
    'Work-Related Injury',
    'Balance and Mobility Issues',
    'Fall Prevention',
    'Posture Improvement',
  ];

  return (
    <div className="w-full mt-5 form-control">
      <label className="label">
        <span className="label-text">Reason For Contact</span>
      </label>
      <select
        className="select select-bordered"
        ref={inputRef}
      >
        {reasonsForContact.map((reason) => (
          <option key={reason}>{reason}</option>
        ))}
      </select>
    </div>
  );
};

export default ContactFormDropdown;
