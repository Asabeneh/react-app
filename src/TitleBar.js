import React, { Component } from 'react';
import createReactClass from 'create-react-class';
const TitleBar = createReactClass({
  render() {
    return (
      <div className="title-bar">
        <div className="logo">
          <img
            className="logo-img"
            src="https://pbs.twimg.com/profile_images/836511614698409984/Wg1lncjD.jpg"
          />
          <span className="logo-title">{this.props.title}</span>
        </div>
      </div>
    );
  }
});
export default TitleBar;
