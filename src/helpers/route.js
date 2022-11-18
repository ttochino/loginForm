import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";

//history
import { history } from './helpers/history';

//pages
import Login from "../components/Login"
import SignForm from "../components/SignForm"

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
        />
        <Route
          path="/sign-form"
          component={SignForm}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes