import NavDetails from './NavDetails';
import Navbar from './Navbar';

const Nav = () => {
  return (
    <div className="container pt-4">
      <NavDetails />
      <div className="my-2 divider"></div>
      <Navbar />
    </div>
  );
};

export default Nav;
