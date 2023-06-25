import Link from 'next/link';

const NavLogo = () => {
  return (
    <Link
      href="/"
      className="flex gap-0 lg:flex-col xl:flex-row"
    >
      <div>
        <span className="text-secondary">ProCare</span>
      </div>
      PhysicalTherapy
    </Link>
  );
};

export default NavLogo;
