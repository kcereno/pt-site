'use client';
import HamburgerMenuIcon from '@/ui/icons/HamburgerMenuIcon';
import Link from 'next/link';
import React from 'react';

const NavDrawer = () => {
  const navLink = 'hover:bg-gray-200 hover:text-gray-900 rounded-md';

  const handleCloseButtonClick = () => {
    const drawer = document.getElementById('mobile-nav-drawer');
    drawer?.click();
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="mobile-nav-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="mobile-nav-drawer"
          className="btn btn-ghost drawer-button"
        >
          <HamburgerMenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
        ></label>
        <div className="flex h-full p-4 menu w-80 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="absolute right-1">
            <button
              className="btn btn-block"
              onClick={handleCloseButtonClick}
            >
              X
            </button>
          </div>
          <ul className="w-auto my-auto menu menu-lg bg-base-200 rounded-box">
            <li>
              <Link
                href="/"
                className={navLink}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={navLink}
              >
                Services
              </Link>
            </li>

            <li>
              <a>Resources</a>
              <ul className="p-2">
                <li>
                  <Link
                    href="/"
                    className={navLink}
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={navLink}
                  >
                    New Patient Forms
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/"
                className={navLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
