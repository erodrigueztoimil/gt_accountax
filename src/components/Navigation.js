import React from 'react';

// css
import '../css/Navigation.css';

class Navigation extends React.Component  {
  render() {
    return (
      <div class="navigation">
        <img src={require('../img/logo.png')} alt="logo" />
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
