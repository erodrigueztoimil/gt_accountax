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
          GT Accountax Services provides accounting services and banking and accounting consultations. We deduce the customer's needs, we answer their questions and we provide the tools to help them grow financially.
          <br />
          Our services among which we have bookkeeper services, taxes, payroll and accounting and financial advice are executed by professionals, graduates and supported by highly trained and experienced staff. GT Accountax Services help small businesses to reduce costs, increase revenue and stay competitive.
          <br />
          Our mission is to strengthen the income generating capacity and safeguard the patrimony of our clients as a key factor of the accounting needs, developing a work together with our clients, of quality that generates confidence in our services so that our sector generates a greater dynamism so as to ensure the permanence and growth of the company.
          <br />
          Our vision is to consolidate ourselves as a Modern Organization and Model, at a local level, providing our professional Consulting Services and Business and Accountancy and Banking Advice, with the highest degree of excellence, focusing on being always an innovative, visionary and highly reliable company, constituting the First option for our clients in the services required and in the solution to their needs.
          <br />
          <br />
          We specialize in small to medium sized business tax returns at a reasonable price.
          We are QuickBooks and excel professionals providing you with high quality accurate bookkeeping service that can be tailored for your Business’s needs.
          We deliver our services to the clients.
          We have a high-end tax software, which is updated to all IRS regulations and codes.

        </p>
      </div>

      <div className='employees'>
        <h2>Our Staff</h2>
        <div className='personal left'>
          <img src={require("../img/grisell.jpg")} alt="grisell" />
          <h2>Grisell Toimil</h2>
          <a href="tel: 786-343-9483">786-343-9483</a>
          <br />
          <a href="mailto: gtaccotax@gmail.com">gtaccotax@gmail.com</a>
          <p>
            Professional Finance and Accounting analyst with demonstrated expertise in taxes and management of general accounting functions which include cost accounting, budgeting, forecasting, accounts payable, accounts receivable, general ledger, financial reporting, fixed assets and inventory control, cash flow. An adaptable and energetic team player that enjoys a motivating and challenging working.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
