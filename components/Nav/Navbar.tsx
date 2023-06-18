import NavDropdown from './NavDropdown';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <nav className="justify-between py-2 mx-auto navbar bg-base-100">
      <div className="">
        <a className="text-xl normal-case btn btn-ghost ">Pro Care PT Group</a>
      </div>

      <div>
        <NavDropdown />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
