import NavDrawer from './NavDrawer';
import NavMenu from './NavMenu';
import Link from 'next/link';

const NavBar = () => {
  const logoText = (
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

  return (
    <nav className="pt-10 container-fluid ">
      <div>
        <div className="flex flex-col lg:mx-0">
          <div className="lg:hidden">
            <button className="my-auto btn btn-block btn-primary">
              Schedule Appointment
            </button>
            <div className="divider"></div>
          </div>
          <div className="flex justify-between align-middle">
            <div className="my-auto text-xl font-bold">{logoText}</div>
            <div className="hidden my-auto lg:block">
              <NavMenu />
            </div>
            <div className="hidden lg:flex">
              <button className="my-auto btn btn-primary">
                Schedule Appointment
              </button>
            </div>
            <div className="lg:hidden">
              <NavDrawer />
            </div>
          </div>
          <div className="hidden my-2 divider lg:flex"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
