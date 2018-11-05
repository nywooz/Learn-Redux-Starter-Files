import React from "react";

import store from "../store";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    const posts = store.getState().posts;
    const comments = store.getState().comments;
    const { postId } = this.props.match.params;
    // index of the post
    const i = posts.findIndex(post => post.code === postId);
    const post = posts[i];

    const postComments = comments[postId] || [];

    // get us the post
    return (
      <div className="single-photo">
        <Photo i={i} {...post} comments={comments} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
