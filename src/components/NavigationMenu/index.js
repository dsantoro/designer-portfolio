import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { List, Container } from "./styles";

import { NavigationMenuContext } from "./NavigationMenuContext";

const menuItems = [
  {
    to: "/",
    label: "Home"
  },
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/portfolio",
    label: "Portfolio"
  }
];

function NavigationMenu() {
  const { toggleMenu, toggle } = useContext(NavigationMenuContext);
  const closeMenu = () => {
    setTimeout(() => {
      toggle(false);
    }, 250);
  };

  return (
    <Container active={toggleMenu}>
      <List>
        {menuItems.map(item => (
          <li key={item.label}>
            <Link onClick={() => closeMenu()} to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default NavigationMenu;
