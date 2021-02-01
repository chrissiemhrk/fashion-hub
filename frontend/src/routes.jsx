import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
