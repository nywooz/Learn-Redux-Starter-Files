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
  console.log("Action: ADD_COMMENT");
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

// remove comment
export const removeComment = (postId, i) => {
  console.log("Action: REMOVE_COMMENT");
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  };
};
