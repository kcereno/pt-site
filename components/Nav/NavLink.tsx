import React from 'react';
import Link from 'next/link';
import { text } from 'stream/consumers';

interface Props {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavLink = ({ text, href, onClick }: Props) => {
  const linkClass = ' hover:text-secondary';

  return (
    <li>
      <Link
        className={linkClass}
        href={href}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
