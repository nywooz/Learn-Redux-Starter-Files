import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

// import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;

// https://brunolm.wordpress.com/2017/03/17/migrating-to-react-router-4-with-redux/
// // To integrate with redux you need to add one extra reducer to your combined reducers:

// import { routerReducer as routing } from 'react-router-redux';

// const App = combineReducers({
//   app,
//   about,
//   routing, // new
// });

// export default App;
