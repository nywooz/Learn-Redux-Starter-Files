// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

// import css
import css from "./styles/style.styl";

import App from "./components/App";

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
}

render(<Main />, document.getElementById("root"));
