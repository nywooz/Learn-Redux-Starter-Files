// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import css
import css from "./styles/style.styl";

import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
