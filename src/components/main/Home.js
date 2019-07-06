import React from 'react';

const Home = () => {
  return (
    <div className="intro">
      <div className='intro-logo'>
        <img src={require('../../img/logo.png')} alt="logo" />
      </div>

      <div className='intro-items'>
        <h1>
          Focus on growing your business,
          <br />
          leave the accounting to us.
        </h1>
        <img src={require("../../img/down.jpg")} alt="down" />
      </div>
    </div>
  );
}

export { Home };
