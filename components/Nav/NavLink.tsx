import React from 'react';
import Link from 'next/link';
import { text } from 'stream/consumers';

interface Props {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: Props) => {
  const linkClass = ' hover:text-secondary';

  return (
    <li>
      <Link
        className={linkClass}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
