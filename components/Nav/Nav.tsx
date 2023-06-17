import React from 'react';
import NavDetails from './NavDetails';

const Nav = () => {
  // Components

  const dropdown = (
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
        className="p-2 mt-3 shadow w-80 w-100 menu menu-lg dropdown-content bg-base-100 rounded-box"
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
          <a>New Patient Forms</a>
        </li>
        <li>
          <a>Insurance Accepted</a>
        </li>
        <li>
          <a>Testimonials</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </div>
  );

  const menu = (
    <ul className="px-1 menu menu-horizontal">
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );

  const navStart = (
    <>
      <a className="text-xl normal-case btn btn-ghost">PT Clinic Name</a>
    </>
  );

  const navCenter = <></>;

  const navEnd = <>{dropdown}</>;

  return (
    <div className="container pt-4">
      <NavDetails />

      {/* Nav Bar */}
      <nav className="mx-auto navbar bg-base-100">
        <div className="navbar-start">{navStart}</div>
        <div className="navbar-center ">{navCenter}</div>
        <div className="navbar-end">{navEnd}</div>
      </nav>
    </div>
  );
};

export default Nav;
