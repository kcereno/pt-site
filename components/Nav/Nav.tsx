import HamburgerMenuIcon from '@/ui/icons/HamburgerMenuIcon';
import NavDetails from './NavDetails';
import Navbar from './Navbar';
import { useState } from 'react';
import NavDrawer from './NavDrawer';
import Link from 'next/link';
import NavMenu from './NavMenu';

const Nav = () => {
  return (
    <div className="container min-w-full pt-10 lg:min-w-0">
      <div className="flex flex-col mx-2">
        <div className="md:hidden">
          <button className="btn btn-block">Book Appointment</button>
          <div className="divider"></div>
        </div>

        <div className="flex justify-between align-middle">
          <div className="my-auto font-bold">Pro Care Pt Group</div>
          <div className="hidden my-auto md:block">
            <NavMenu />
          </div>
          <div className="hidden md:block">
            <button className="btn btn-neutral">Book Appointment</button>
          </div>
          <div className="md:hidden">
            <NavDrawer />
          </div>
        </div>
        <div className="my-2 divider"></div>
        <NavDetails />
      </div>
    </div>
  );
};

export default Nav;
