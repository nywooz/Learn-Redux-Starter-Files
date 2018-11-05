//  a  reducer take 2 things:

// 1. the action (info about what happened )
// 2. copy of current state

function posts(state = [], action) {
  console.log("the post will change");
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT_LIKES":
      // return the updated state
      console.log("Incrementing Likes!!");
      const i = action.index;

      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 }, // take  a copy of the object then spread the "likes"
        ...state.slice(i + 1) // after the one we are updating
      ];
    default:
      return state;
  }

  return state;
}

export default posts;
