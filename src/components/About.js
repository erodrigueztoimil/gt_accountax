import React from 'react';
import InformationContainer from './InformationContainer';

function About() {
  return (
    <div id='About'>
      <div className='company-description'>
        <h3>Company</h3>
        <p>GT Accountax Services provides accounting services, banking and accounting solutions. We deduce the customer’s needs, answering their questions and providing the right tools to help them grow financially. We are a group of very dedicated professionals experienced in business management and accounting ready to help your company get the results you want. Our services consists in bookkeeping, taxes, payroll, accounting and financial advice. GT Accountax Services loves helping small business grow and reach greatness by reducing costs, increasing revenue and staying competitive.</p>
      </div>
      <InformationContainer
        right
        imgSrc={'https://ucarecdn.com/2cc74fc2-7758-47b0-bcbf-276a91a2fd65/bg_7.jpg'}
        header='Mission'
        paragraph='We specialize in small to medium sized business tax returns at a reasonable price. We are QuickBooks and excel professionals providing you with high quality accurate bookkeeping service that can be tailored for your Business’s needs. We deliver our services to the clients. We have a high-end tax software, which is updated to all IRS regulations and codes.'
      />
      <InformationContainer
        left
        imgSrc={'https://ucarecdn.com/8e63aeff-53ea-4948-9702-0be6e0c923fc/bg_4.jpg'}
        header='Vision'
        paragraph='Our vision is to consolidate ourselves as a Modern Organization and Model, at a local level, providing our professional Consulting Services and Business and Accountancy and Banking Advice, with the highest degree of excellence, focusing on being always an innovative, visionary and highly reliable company, constituting the First option for our clients in the services required and in the solution to their needs.'
      />
    </div>
  );
}

export default About;
