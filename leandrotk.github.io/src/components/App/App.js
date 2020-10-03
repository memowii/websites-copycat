import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { Home } from "../../pages/Home";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/constant-feedback-driven-development-with-nodemon"
          component={Home}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);
