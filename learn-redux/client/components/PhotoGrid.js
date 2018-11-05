import React from "react";
import store from "../store";
import Photo from "./Photo";

const PhotoGrid = React.createClass({
  render() {
    const posts = store.getState().posts;
    const comments = store.getState().comments;
    return (
      <div className="photo-grid">
        <p>Im photogrid</p>

        {posts.map((post, i) => {
          return (
            <Photo key={i} i={i} {...post} comments={comments} store={store} />
          );
        })}
      </div>
    );
  }
});

export default PhotoGrid;

// goToSingle = e => {
//   // 1. stop default form submit
//   e.preventDefault();
//   // 2. get text from that input
//   const postId = this.myInput.value.value;

//   // 3. change the page to /store/whateva-they-entered
//   this.props.history.push(`/store/${postId}`);
//   console.log(this);
// };
