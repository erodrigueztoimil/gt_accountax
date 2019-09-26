import React from 'react';

function Contact() {
  return (
    <div id="Contact">
      <div className='contact-container'>
        <div className='desc-container'>
          <h3>Get in touch!</h3>
          <p>If you have any questions or comments, please contact us via email or phone. We are are more than happy to answer all your questions.</p>
        </div>
        <div className='info-container'>
          <h4>Phone</h4>
          <a href='tel:7863439483'>786-343-9483</a>
          <h4>Email</h4>
          <a href='mailto:gtaccotax@gmail.com'>gtaccotax@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
