import HamburgerMenuIcon from '@/ui/icons/HamburgerMenuIcon';
import NavDetails from './NavDetails';
import Navbar from './Navbar';
import { useState } from 'react';
import NavDrawer from './NavDrawer';

const Nav = () => {
  return (
    <div className="pt-10 mx-4 ">
      <div className="">
        <button className="btn btn-block">Book Appointment</button>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="my-auto font-bold">Pro Care Pt Group</div>
          <div>
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
