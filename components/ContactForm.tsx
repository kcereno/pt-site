import React from 'react';

const ContactForm = () => {
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
    <div>
      <form className="p-5 rounded-lg bg-slate-300">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          {/* Name */}
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered "
            />
          </div>
          {/* Email */}
          <div className="w-full mt-5 lg:mt-0 form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered "
            />
          </div>
          {/* Phone */}
          <div className="w-full mt-5 lg:mt-0 form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full input input-bordered "
            />
          </div>
        </div>

        {/* Reason */}
        <div className="w-full mt-5 form-control">
          <label className="label">
            <span className="label-text">Reason For Contact</span>
          </label>
          <select className="select select-bordered">
            <option
              disabled
              selected
            >
              Pick one
            </option>
            {reasonsForContact.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </div>
        {/* Message */}
        <div className="mt-5 form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
            rows={10}
          ></textarea>
        </div>
        <div className="flex justify-end gap-3">
          <button className="mt-5 btn btn-primary">Submit</button>
          <button className="mt-5 btn btn-neutral btn-outline">Reset</button>
        </div>
      </form>
      <p className="mt-3 text-center text-red-500">*All Fields Are Required</p>
    </div>
  );
};

export default ContactForm;
