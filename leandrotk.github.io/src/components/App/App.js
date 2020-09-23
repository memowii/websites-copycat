import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { Home } from "../../pages/Home";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        
        {/* <Route exact path="/equipo" component={Equipo} />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path="/blog/estrategias-decisiones-crecer-negocio"
          component={BlogEntry}
        />
        <Route exact path="/juntos-mipymes" component={JuntosPymes} />
        <Route exact path="/juntos-mipymes/tyc" component={Terminos} />
        <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);
