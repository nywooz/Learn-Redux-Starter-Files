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
        <p>
          {" "}
          <Link to="/view/:postId">single grid</Link>
        </p>
      </div>
    );
  }
});

export default Main;
