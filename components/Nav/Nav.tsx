import NavBar from './NavBar';
import NavDetails from './NavDetails';

const Nav = () => {
  return (
    <>
      <NavBar />
      <div className="mt-0 divider divider-vertical lg:hidden"></div>
      <NavDetails />
    </>
  );
};

export default Nav;
