// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

// import css
import css from "./styles/style.styl";

import App from "./components/App";

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

render(<Main />, document.getElementById("root"));
