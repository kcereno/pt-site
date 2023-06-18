import React from 'react';

const NavMenu = () => {
  return (
    <ul className="flex-1 hidden px-1 menu menu-horizontal lg:flex md:gap-0">
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
        <a>Testimonials</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            <li>
              <a>Insurance Accepted</a>
            </li>
            <li>
              <a>New Patient Forms</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  );
};

export default NavMenu;
