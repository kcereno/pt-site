import React from 'react';

const Nav = () => {
  const dropdown = (
    <div className="dropdown">
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
        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
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
      <p>Telephone Icon</p>
    </>
  );

  const navCenter = (
    <>
      <a className="text-xl normal-case btn btn-ghost">ProCare PT</a>
    </>
  );

  const navEnd = (
    <>
      {dropdown}
      <div className="flex-none">
        <div className="">row 1</div>
        <div className="">row 2</div>
      </div>
    </>
  );

  return (
    <>
      <div className="">
        <div className="">icon location</div>
        <div className="">icon phone number</div>
        <div className="">icon Contact Us button</div>
      </div>
      <nav className="max-w-[1100px] mx-auto navbar bg-base-100">
        <div className="navbar-start">{navStart}</div>
        <div className="navbar-center ">{navCenter}</div>
        <div className="navbar-end">{navEnd}</div>
      </nav>
    </>
  );
};

export default Nav;
