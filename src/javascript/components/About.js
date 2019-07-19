import React from 'react';
import '../../styles/stylesheets/About.css';
import { FounderCard } from './common';

function About() {
  return (
    <div className='about'>
      <div className='company'>
        <div className='content'>
          <h3>Company</h3>
          <p>
            GT Accountax Services provides accounting services and banking and accounting consultations. We deduce the customer’s needs, we answer their questions and we provide the tools to help them grow financially. Our services among which we have bookkeeper services, taxes, payroll and accounting and financial advice are executed by professionals, graduates and supported by highly trained and experienced staff. GT Accountax Services help small businesses to reduce costs, increase revenue and stay competitive.
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='section-child'>
          <h3>Mission</h3>
          <p>Our vision is to consolidate ourselves as a Modern Organization and Model, at a local level, providing our professional Consulting Services and Business and Accountancy and Banking Advice, with the highest degree of excellence, focusing on being always an innovative, visionary and highly reliable company, constituting the First option for our clients in the services required and in the solution to their needs.</p>
        </div>
        <div className='section-child'>
          <h3>Vision</h3>
          <p>We specialize in small to medium sized business tax returns at a reasonable price. We are QuickBooks and excel professionals providing you with high quality accurate bookkeeping service that can be tailored for your Business’s needs. We deliver our services to the clients. We have a high-end tax software, which is updated to all IRS regulations and codes.</p>
        </div>
      </div>
      <FounderCard />
    </div>
  );
}

export { About };
