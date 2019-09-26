import React from 'react';
import Navigation from './Navigation';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';
import Logo from '../images/logo.svg';
import BgImage1 from '../images/bg_1.jpg';
import Arrow from '../images/arrow.svg';

function Home() {
  return (
    <div id='Home'>
      <Parallax bgImage={BgImage1} strength={400}>
        <div className='home-container'>
          <Navigation />
          <div className='logo-container'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='social-container'>
            <Link
              activeClass="active"
              to={'About'}
              spy={true}
              smooth={true}
              duration={1700}
            >
              <img src={Arrow} alt='Arrow' />
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Home;
