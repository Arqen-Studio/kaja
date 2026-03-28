import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-5 items-center px-4 py-4 text-center">
        {leftNav.map((item) => (
          <NavLinkItem key={item.path} {...item} />
        ))}

        <div className="relative flex justify-center">
          <img
            src="/png/logo.light.png"
            alt="Logo"
            className="block dark:hidden w-[77px] h-[121px]"
          />
          <img
            src="/png/logo.dark.png"
            alt="Logo"
            className="hidden dark:block w-[77px] h-[121px]"
          />
        </div>

        {rightNav.map((item) => (
          <NavLinkItem key={item.path} {...item} />
        ))}
      </div>
    </header>
  );
};

export default Navbar;

type NavItem = {
  label: string;
  path: string;
};

const leftNav: NavItem[] = [
  { label: "RESERVATION", path: "/reservation" },
  { label: "ABOUT", path: "/about" },
];

const rightNav: NavItem[] = [
  { label: "MENU", path: "/menu" },
  { label: "STORIES", path: "/stories" },
];

const NavLinkItem = ({ label, path }: NavItem) => (
  <Link to={path} className="navbar-text">
    {label}
  </Link>
);
