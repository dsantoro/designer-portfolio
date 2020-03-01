import React, { useContext } from "react";

import { NavigationMenuContext } from "../NavigationMenu/NavigationMenuContext";

import { Container, Logo, ImageLogo, Hamburguer } from "./styles";

function Header() {
  const { toggle } = useContext(NavigationMenuContext);

  return (
    <Container>
      <Logo to="/">
        <ImageLogo src="https://no-cookie.kiwifarms.net/data/avatars/o/45/45435.jpg?1573858356" />
      </Logo>

      <Hamburguer onClick={() => toggle()}>
        <span />
        <span />
        <span />
      </Hamburguer>
    </Container>
  );
}

export default Header;
