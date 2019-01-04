import React from 'react';

// css
import '../css/About.css';

const About = () => {
  return (
    <section className='about'>
      <h1>about.</h1>

      <div className='company'>
        <h2>Our Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='employees'>
        <h2>Our Employees</h2>
        <div className='personal left'>
          <img src={require("../img/grisell.jpg")} alt="grisell" />
          <h2>Grisell Toimil</h2>
          <a href="tel: 786-343-8972">786-343-8972</a>
          <br />
          <a href="mailto: gtaccotax@gmail.com">gtaccotax@gmail.com</a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='personal right'>
          <img src={require("../img/dayami.jpg")} alt="dayami" />
          <h2>Dayami Pazos</h2>
          <a href="tel: 305-458-2850">305-458-2850</a>
          <br />
          <a href="mailto: gtaccotax@gmail.com">gtaccotax@gmail.com</a>
          <p>
            Accounting & Financial Degree  - Bachelor of Business Administration in Accounting and Finance.  A professional offering more than 25 years of banking and loan operations experience in key loan servicing areas such as Quality Control, Funding, Research, Processing, Customer Service, Payoffs, Escrows while maintaining integrity to Bank policies and procedures while maintaining focus on regulatory and compliance matters. An adaptable and energetic team player that enjoys a motivating and challenging working.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
