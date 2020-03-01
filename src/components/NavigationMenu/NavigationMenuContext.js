import React, { createContext, useState } from "react";

export const NavigationMenuContext = createContext();

export function NavigationProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu);

  return (
    <NavigationMenuContext.Provider value={{ toggle, toggleMenu }}>
      {children}
    </NavigationMenuContext.Provider>
  );
}
