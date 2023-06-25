import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <ul className="px-1 menu lg:menu-lg menu-horizontal">
      <NavLink
        text="About Us"
        href="/about"
      />
      <NavLink
        text="Services"
        href="/services"
      />
      <li tabIndex={0}>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            <NavLink
              text="Insurance"
              href="/insurance"
            />
            <NavLink
              text="New Patient Forms"
              href="/newpatientforms"
            />
          </ul>
        </details>
      </li>
      <NavLink
        text="Contact Us"
        href="/contact"
      />
    </ul>
  );
};

export default NavLinks;
