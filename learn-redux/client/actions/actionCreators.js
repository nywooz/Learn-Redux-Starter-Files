// increment likes
// function listed below are returning actions

export const increment = index => {
  console.log("Action: INCREMENT_LIKES");
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

// remove comment
export const removeComment = (postId, i) => {
  return {
    type: "REMOVE_COMMENT",
    postId,
    i
  };
};
