import NavDropdown from './NavDropdown';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <nav className="justify-between mx-auto navbar bg-base-100">
      <div className="">
        <a className="text-xl normal-case btn btn-ghost ">PT Clinic Name</a>
      </div>

      <div>
        <NavDropdown />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
