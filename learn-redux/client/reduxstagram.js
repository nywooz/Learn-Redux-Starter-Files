// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

// import css
import css from "./styles/style.styl";

import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Main />
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </div>
      </Router>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
