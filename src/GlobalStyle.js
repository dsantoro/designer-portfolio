import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Merriweather', serif;

  }

  a {
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
