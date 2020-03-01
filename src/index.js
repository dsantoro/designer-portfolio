import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
