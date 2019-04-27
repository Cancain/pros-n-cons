import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ListMaker from "../../Containers/Pages/ListMaker/ListMaker";

const Router = props => {
  return (
    <Fragment>
      <Switch>
        <Route path="/list" component={ListMaker} exact />
      </Switch>
    </Fragment>
  );
};

export default Router;
