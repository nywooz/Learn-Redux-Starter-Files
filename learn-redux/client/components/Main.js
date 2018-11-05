import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import store from "../store";

import Single from "./Single";
import PhotoGrid from "./PhotoGrid";
// homePage(PhotoGrid), if(path has "/" in URL)
// Single "/", as PhotoGrid are children of main component

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>

        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </div>
    );
  }
});

export default Main;
