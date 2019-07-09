import React from 'react';
import '../../styles/stylesheets/Home.css';
import { Navigation } from '../nav';
import { Shortcuts } from '../common';

function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='content'>
        <div className='logo'>
          <img src={require('../../img/logo.png')} alt="logo" />
        </div>
        <div className='down'>
          <img src={require('../../img/down.jpg')} alt="down" />
        </div>
      </div>
    </div>
  );
}

export { Home };
