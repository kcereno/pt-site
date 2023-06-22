import NavDetails from './NavDetails';
import NavDrawer from './NavDrawer';
import NavMenu from './NavMenu';

const Nav = () => {
  const logoText = 'Pro Care PT Group';

  const DUMMY_LOGO_TEXT = 'PT Clinic';

  return (
    <nav className="container pt-10">
      <div className="flex flex-col lg:mx-0">
        <div className="md:hidden">
          <button className="my-auto btn btn-block">Book Appointment</button>
          <div className="divider"></div>
        </div>
        <div className="flex justify-between align-middle">
          <div className="my-auto font-bold">{DUMMY_LOGO_TEXT}</div>
          <div className="hidden my-auto md:block">
            <NavMenu />
          </div>
          <div className="hidden md:flex">
            <button className="my-auto btn btn-neutral">
              Schedule Appointment
            </button>
          </div>
          <div className="md:hidden">
            <NavDrawer />
          </div>
        </div>
        <div className="hidden my-2 divider lg:flex"></div>
        <NavDetails />
      </div>
    </nav>
  );
};

export default Nav;
