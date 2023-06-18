import HamburgerMenuIcon from '@/ui/icons/HamburgerMenuIcon';
import React from 'react';

const NavDrawer = () => {
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
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
          <ul className="my-auto">
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
