import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "../Layout";
import { Home } from "../../pages/Home";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
