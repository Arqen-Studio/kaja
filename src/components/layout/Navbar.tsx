import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative">
      <div className="hidden md:grid mx-auto max-w-6xl grid-cols-5 items-center px-4 py-4 text-center">
        {leftNav.map((item) => (
          <NavLinkItem key={item.path} {...item} />
        ))}

        <div className="flex justify-center">
          <Link to="/">
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
          </Link>
        </div>

        {rightNav.map((item) => (
          <NavLinkItem key={item.path} {...item} />
        ))}
      </div>

      <div className="flex md:hidden items-center justify-between px-4 py-4">
        <Link to="/">
          <img
            src="/png/logo.light.png"
            alt="Logo"
            className="block dark:hidden w-[60px]"
          />
          <img
            src="/png/logo.dark.png"
            alt="Logo"
            className="hidden dark:block w-[60px]"
          />
        </Link>

        <button onClick={() => setIsOpen((prev) => !prev)} className="text-">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`absolute left-0 z-50 w-full md:hidden bg-[#FCF7F5] dark:bg-[#32341D] transform transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="mx-2 mt-2 flex flex-col items-center gap-0 py-6">
          {[...leftNav, ...rightNav].map((item, index, arr) => (
            <div key={item.path} className="w-full">
              <NavLinkItem
                {...item}
                onClick={() => setIsOpen(false)}
                isMobile
              />

              {index !== arr.length - 1 && (
                <div className="mx-3 h-px " />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

/* ================= NAV ITEMS ================= */

type NavItem = {
  label: string;
  path: string;
  onClick?: () => void;
  isMobile?: boolean;
};

const leftNav: NavItem[] = [
  { label: "RESERVATION", path: "/reservation" },
  { label: "ABOUT", path: "/about" },
];

const rightNav: NavItem[] = [
  { label: "MENU", path: "/menu" },
  { label: "STORIES", path: "/stories" },
];

const NavLinkItem = ({ label, path, onClick, isMobile }: NavItem) => (
  <NavLink
    to={path}
    onClick={onClick}
    className={({ isActive }) =>
      `navbar-text ${isMobile ? "block text-center py-3" : ""} ${
        isActive ? "underline underline-offset-4" : ""
      }`
    }
  >
    {label}
  </NavLink>
);
