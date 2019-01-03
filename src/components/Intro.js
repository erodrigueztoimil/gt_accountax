import React from 'react';



// css
import '../css/Intro.css';

// components
// import Navigation from './Navigation';

const Intro = () => {
  return (
    <div className="intro">
      <div className='intro-logo'>
        <img src={require('../img/logo.png')} alt="logo" />
      </div>

      <div className='intro-items'>
        <h1>We are the solution to all your accounting issues.</h1>
        <img src={require("../img/down.jpg")} alt="down" />
      </div>
    </div>
  );
}

export default Intro;
