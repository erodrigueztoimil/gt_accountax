import React from 'react';

// components


// css
import '../css/Footer.css';
import '../css/SocialMedia.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='navigate'>
        <h2>Navigate</h2>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>


      <div className='information'>
        <h2>Our Information.</h2>
        <a href="mailto: gtaccotax@gmail.com">gtaccotax@gmail.com</a>
        <p>Grisell Toimil</p>
        <a href="tel: 786-343-9483">786-343-9483</a>
        <p>Dayami Pazos</p>
        <a href="tel: 305-458-2850">305-458-2850</a>
      </div>


      <div className="smedia">
        {/* eslint-disable-next-line */}
        <a href="https://www.facebook.com/gtaccountax/" className="fa fa-facebook"></a>
        {/* eslint-disable-next-line */}
        <a href="/" className="fa fa-twitter"></a>
        {/* eslint-disable-next-line */}
        <a href="/" className="fa fa-linkedin"></a>
      </div>

      <h3>Created by:</h3>
      <p><a href="https://erodrigueztoimil.netlify.com">Ernesto Rodriguez | Web/App Developer</a></p>
    </div>
  );
}

export { Footer };
