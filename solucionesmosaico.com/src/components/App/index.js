import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from "../../pages/Home";
import { Equipo } from "../../pages/Equipo";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/equipo" component={Equipo} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
