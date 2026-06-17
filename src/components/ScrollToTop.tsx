import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
      return;
    }

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
