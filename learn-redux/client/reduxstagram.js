// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

// import Raven from "raven-js";
// Sentry.init({
//  dsn: "https://a787958edf9542dd991667ba283a775b@sentry.io/1316176"
// });
// should have been called before using it here
// ideally before even rendering your react app
// import { sentry_url } from "./data/config";

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: "as09d8f09"
//   }
// }).install();

// logException(new Error("Incomplete Data!"), {
//   email: "wesbos@gmail.com"
// });

// Raven.showReportDialog();

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
