import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavigationProvider } from "./components/NavigationMenu/NavigationMenuContext";

import Layout from "./components/Layout";

import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function Routes() {
  return (
    <Router>
      <NavigationProvider>
        <Layout>
          <Header />
          <NavigationMenu />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Layout>
      </NavigationProvider>
    </Router>
  );
}

export default Routes;
