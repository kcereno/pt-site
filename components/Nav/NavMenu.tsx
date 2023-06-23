import Link from 'next/link';

const NavMenu = () => {
  const linkClasses = ' hover:text-secondary';

  return (
    <ul className="px-1 menu lg:menu-lg menu-horizontal">
      <li>
        <Link
          className={linkClasses}
          href="/about"
        >
          About Us
        </Link>
      </li>

      <li>
        <Link
          className={linkClasses}
          href="/"
        >
          Services
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Resources</summary>
          <ul className="p-2">
            <li>
              <Link
                className={linkClasses}
                href="/"
              >
                Insurance
              </Link>
            </li>
            <li>
              <Link
                className={linkClasses}
                href="/"
              >
                New Patient Forms
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          className={linkClasses}
          href="/"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
