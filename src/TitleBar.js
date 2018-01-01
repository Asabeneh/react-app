import React from 'react';
import PropTypes from 'prop-types';
const TitleBar = (props)=>{
    return (
      <div className="title-bar">
        <div className="logo">
          <img
            className="logo-img"
             src="https://pbs.twimg.com/profile_images/836511614698409984/Wg1lncjD.jpg"
            alt = "Nord software logo"/>
          <span className="logo-title">{props.title}</span>
        </div>
      </div>
    );
  }
  TitleBar.propTypes = {
    title:PropTypes.string,
  }
 export default TitleBar;
