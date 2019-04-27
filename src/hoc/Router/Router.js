import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ListMaker from "../../Containers/Pages/ListMaker/ListMaker";
import Home from "../../Containers/Pages/Home/Home";

const Router = props => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={ListMaker} exact />
      </Switch>
    </Fragment>
  );
};

export default Router;
