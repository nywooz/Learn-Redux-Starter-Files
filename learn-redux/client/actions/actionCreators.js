// increment likes
// function listed below are returning actions

export function increment(index) {
  console.log("Action: INCREMENT_LIKES");
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    i
  };
}
