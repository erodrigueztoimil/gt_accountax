import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>contact.</h1>
      <h2>*use direct email for your security</h2>

      <div className="form center">
        <form className="" action="index.html" method="post">
          <input type="text" placeholder="Name" required/>
          <input type="tel" placeholder="Phone" required/>
          <input type="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Message" required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export { Contact };
