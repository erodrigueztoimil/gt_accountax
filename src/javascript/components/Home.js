import React from 'react';
import '../../styles/stylesheets/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <div className='left'>
          <button>Appointment</button>
        </div>
        <div className='divider'/>
        <div className='right'>
          <img src={require('../../images/icons/menu_button.svg')} alt='menu'/>
        </div>
      </div>
      <div className='container'>
        <img src={require('../../images/logo.svg')} alt='logo'/>
      </div>
      <div className='footer'>
        <img src={require('../../images/icons/facebook.svg')} alt='facebook'/>
        <img src={require('../../images/icons/linkedin.svg')} alt='linkedin'/>
      </div>
    </div>
  );
}

export { Home };
