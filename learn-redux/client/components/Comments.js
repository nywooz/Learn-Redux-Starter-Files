import React from "react";
import { addComment, removeComment } from "../actions/actionCreators";

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            onClick={removeComment.bind(null, this.props.postId, i)}
            className="remove-comment"
          >
            &times;
          </button>
        </p>
      </div>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
