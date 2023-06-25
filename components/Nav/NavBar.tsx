import ScheduleAppointmentButton from '@/ui/buttons/ScheduleAppointmentButton';
import NavDrawer from './NavDrawer';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';

const NavBar = () => {
  return (
    <nav className="pt-10 container-fluid ">
      <div className="flex flex-col lg:mx-0">
        {/* Mobile Schedule Appointment Button */}
        <div className="lg:hidden">
          <ScheduleAppointmentButton mobile />
          <div className="divider"></div>
        </div>

        {/* Desktop Navbar */}
        <div className="flex justify-between align-middle">
          <div className="my-auto text-xl font-bold">
            <NavLogo />
          </div>
          <div className="hidden my-auto lg:block">
            <NavLinks />
          </div>
          <div className="hidden lg:flex">
            <ScheduleAppointmentButton />
          </div>
          <div className="lg:hidden">
            <NavDrawer />
          </div>
        </div>

        <div className="hidden my-2 divider lg:flex"></div>
      </div>
    </nav>
  );
};

export default NavBar;
