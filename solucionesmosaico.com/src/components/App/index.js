import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { Layout } from "../Layout";
import { Home } from "../../pages/Home";
import { Equipo } from "../../pages/Equipo";
import { Blog } from "../../pages/Blog";
import { BlogEntry } from "../../pages/BlogEntry";
import { JuntosPymes } from "../../pages/JuntosPymes";
import { Terminos } from "../../pages/Terminos";
import { NotFound } from "../../pages/NotFound";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Route
          render={({ location }) => {
            const { key } = location;

            return (
              <CSSTransition key={key} timeout={0}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/equipo" component={Equipo} />
                  <Route exact path="/blog" component={Blog} />
                  <Route
                    exact
                    path="/blog/estrategias-decisiones-crecer-negocio"
                    component={BlogEntry}
                  />
                  <Route exact path="/juntos-mipymes" component={JuntosPymes} />
                  <Route
                    exact
                    path="/juntos-mipymes/tyc"
                    component={Terminos}
                  />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            );
          }}
        />
      </Layout>
    </BrowserRouter>
  </div>
);
