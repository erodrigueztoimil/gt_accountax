import React from 'react';

function Services() {
  return (
    <div id='Services'>
      <h3>Services</h3>
      <div className='services-container'>
        <div className='row'>
          <div className='service'>
            <h4>Corporate Income Tax</h4>
          </div>
          <div className='service'>
            <h4>Personal Income Tax</h4>
          </div>
          <div className='service'>
            <h4>Small Business Accounting</h4>
          </div>
        </div>
        <div className='row'>
          <div className='service'>
            <h4>Business start-ups</h4>
          </div>
          <div className='service'>
            <h4>Financial Statement Preparation</h4>
          </div>
          <div className='service'>
            <h4>Cash Flow Management</h4>
          </div>
        </div>
        <div className='row'>
          <div className='service'>
            <h4>Payroll Preparation</h4>
          </div>
          <div className='service'>
            <h4>Sales and Payroll Taxes Calculations and Remittance</h4>
          </div>
          <div className='service'>
            <h4>Banking Consultation</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
