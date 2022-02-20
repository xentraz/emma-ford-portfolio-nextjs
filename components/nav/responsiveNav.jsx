import { ResponsiveNavStyle } from "./responsiveNav.style";
import { useState, setState, useEffect } from "react";
import { Icon } from "@iconify/react";
import NavItems from "./navItems";

const ResponsiveNav = () => {
  // NOTE: should rename to isOpen. Indicate type
  const [open, setOpen] = useState(false);
  const [_, setIsMenuVisible] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const iconKind = open ? "emojione-monotone:cross-mark" : "dashicons:menu";
  const iconClassName = open ? "header-menu-bar" : "header-menu-x";

  useEffect(() => {
    const changeBackground = () => {
      if (globalThis.scrollY >= 700) {
        // NOTE: trigger the effect you want
        setIsMenuVisible(true);
      } else {
        setIsMenuVisible(false);
      }
    };

    if (typeof globalThis !== "undefined") {
      globalThis.addEventListener("scroll", changeBackground);
    }

    return () => {
      if (typeof globalThis !== "undefined") {
        globalThis.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);

  // Can't make it work ^
  // want the navbar to have a black background when you scroll
  // past a certain point, (which is fine) but when you expand the nav,
  // it stays 60px and not 100vh because I can't figure out how to
  // remove the 'active' class from the navbar when you open the nav

  return (
    <>
      <ResponsiveNavStyle>
        <Icon
          className={iconClassName}
          icon={iconKind}
          color="#0e899f"
          onClick={() => setOpen(!open)}
        />

        {open && <NavItems />}
      </ResponsiveNavStyle>
    </>
  );
};

export default ResponsiveNav;
