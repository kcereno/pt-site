import Link from 'next/link';

const NavMenu = () => {
  return (
    <ul className="px-1 menu menu-horizontal">
      <li>
        <Link href="/">About Us</Link>
      </li>

      <li>
        <Link href="/">Services</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Insurance</Link>
            </li>
            <li>
              <Link href="/">New Patient Forms</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/">Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
