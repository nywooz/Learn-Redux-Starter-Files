import React from "react";
import { Link } from "react-router-dom";

// homePage(PhotoGrid), if(path has "/" in URL)
// Single "/", as PhotoGrid are children of main component

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
});

export default Main;
