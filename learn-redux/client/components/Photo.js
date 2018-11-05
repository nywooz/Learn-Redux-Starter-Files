import React from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { increment } from "../actions/actionCreators";

const Photo = React.createClass({
  render() {
    const { code, display_src, caption, i, id, likes } = this.props;
    const comments = this.props.comments;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${code}`}>
            <img className="grid-photo" src={display_src} alt={caption} />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className="likes-heart">
              {likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button onClick={increment.bind(null, i)} className="likes">
              &hearts; {likes}
            </button>
            <Link className="button" to={`/view/${code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[code] ? comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;
