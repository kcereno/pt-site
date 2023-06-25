'use client';
import HamburgerMenuIcon from '@/ui/icons/HamburgerMenuIcon';
import NavLinks from './NavLinks';

const NavDrawer = () => {
  const navLink = 'hover:bg-gray-200 hover:text-gray-900 rounded-md';

  const handleButtonClick = () => {
    const drawer = document.getElementById('mobile-nav-drawer');
    drawer?.click();
  };

  const closeDrawerButton = (
    <button
      className="btn btn-block"
      onClick={handleButtonClick}
    >
      X
    </button>
  );

  return (
    <div className="z-10 drawer drawer-end">
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
        <div className="flex h-full p-4 w-96 menu bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="absolute right-1">{closeDrawerButton}</div>
          <NavLinks mobile />
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
