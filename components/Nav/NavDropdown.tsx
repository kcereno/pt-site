import React from 'react';

const NavDropdown = () => {
  return (
    <div className="z-10 dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="w-auto p-2 mt-3 shadow menu menu-lg dropdown-content bg-base-100 rounded-box"
      >
        <li>
          <a>About</a>
        </li>
        <li>
          <a href="">Our Team</a>
        </li>
        <li>
          <a>Services</a>
        </li>

        <li>
          <a>Insurance Accepted</a>
        </li>
        <li>
          <a>Testimonials</a>
        </li>
        <li>
          <a>Resources</a>
          <ul className="p-2">
            <li>
              <a>Insurance Accepted</a>
            </li>
            <li>
              <a>New Patient Forms</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
