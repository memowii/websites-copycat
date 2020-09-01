import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from "../../pages/Home";
import { Equipo } from "../../pages/Equipo";
import { Blog } from "../../pages/Blog";
import { BlogEntry } from "../../pages/BlogEntry";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/equipo" component={Equipo} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/blog/estrategias-decisiones-crecer-negocio"
              component={BlogEntry}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
