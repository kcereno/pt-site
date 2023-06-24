import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <p className="text-red-500">*All Fields Are Required</p>
      <form className="p-3 mt-10 rounded-lg bg-slate-100">
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered "
          />
        </div>

        <div className="w-full mt-5 form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered "
          />
        </div>

        <div className="w-full mt-5 form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered "
          />
        </div>

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
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>

        <div className="mt-5 form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="h-24 textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
