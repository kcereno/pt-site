import { useEffect, useState } from 'react';
import NavLink from './NavLink';

interface Props {
  mobile?: boolean;
}

const NavLinks = ({ mobile }: Props) => {
  const [resourceOpen, setResourceOpen] = useState(false);

  let classes = 'px-1 menu lg:menu-lg menu-horizontal';

  if (mobile) classes = 'my-auto menu menu-lg bg-base-200 rounded-box';

  const handleButtonClick = () => {
    console.log('clicked');
    setResourceOpen(false);
    if (mobile) {
      const drawer = document.getElementById('mobile-nav-drawer');
      drawer?.click();
    }
  };

  const handleResourceButtonClick = () => {
    setResourceOpen((prev) => !prev);
  };

  return (
    <ul className={classes}>
      {mobile && (
        <NavLink
          text="Home"
          href="/"
          onClick={handleButtonClick}
        />
      )}
      <NavLink
        text="About Us"
        href="/about"
        onClick={handleButtonClick}
      />
      <NavLink
        text="Services"
        href="/services"
        onClick={handleButtonClick}
      />
      {!mobile && (
        <li tabIndex={0}>
          <details open={false}>
            <summary>Resources</summary>
            <ul className="p-2">
              <NavLink
                text="Insurance"
                href="/insurance"
                onClick={handleButtonClick}
              />
              <NavLink
                text="New Patient Forms"
                href="/newpatientforms"
                onClick={handleButtonClick}
              />
            </ul>
          </details>
        </li>
      )}
      {mobile && (
        <li>
          <a>Resources</a>
          <ul className="px-5 py-2">
            <NavLink
              text="Insurance"
              href="/insurance"
              onClick={handleButtonClick}
            />
            <NavLink
              text="New Patient Forms"
              href="/newpatientforms"
              onClick={handleButtonClick}
            />
          </ul>
        </li>
      )}
      <NavLink
        text="Contact"
        href="/contact"
        onClick={handleButtonClick}
      />
    </ul>
  );
};

export default NavLinks;
