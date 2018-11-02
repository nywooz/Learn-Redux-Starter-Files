import React from "react";

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        <p>Im photogrid</p>
        <p>
          <button>Go To photo</button>
        </p>
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
