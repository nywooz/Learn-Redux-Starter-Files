import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// instead of using props to all child components, use connect.
// connect inject data from store to component level where datta is needed

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
