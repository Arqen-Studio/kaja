import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Keep hash targets visible below the fixed navbar.
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const navbarOffset = window.innerWidth >= 768 ? 153 : 92;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
