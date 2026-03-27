import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-5 items-center px-4 py-4 text-center">
        <Link to="/reservation" className="navbar-text">
            RESERVATION
        </Link>
        <Link to="/about" className="navbar-text">
            ABOUT
        </Link>

        <div className="relative flex justify-center">
          <img
            src="/png/logo.light.png"
            alt="Logo"
            className="block dark:hidden w-[77px] h-[121px]"
          />
          <img
            src="/png/logo.dark.png"
            alt="Logo"
            className="hidden dark:block max-w-[77px] h-[121px]"
          />
        </div>

        <Link to="/menu" className="navbar-text">
            MENU
        </Link>
        <Link to="/stories" className="navbar-text">
            STORIES
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
