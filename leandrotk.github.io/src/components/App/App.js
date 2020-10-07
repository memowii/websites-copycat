import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { Home } from "../../pages/Home";
import { Article } from "../../pages/Article";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
