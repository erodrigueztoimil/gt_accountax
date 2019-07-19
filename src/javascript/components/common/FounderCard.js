import React from 'react';

function FounderCard() {
  return (
    <div className='founder'>
      <div className='founder-image'>
        <img src={require('../../../images/grisell.jpg')} alt='founder' />
      </div>
      <div className='founder-info'>
        <div className='content'>
          <h3>Grisell Toimil</h3>
          <h4>Founder</h4>
          <p>
            Professional Finance and Accounting analyst with demonstrated expertise in taxes and management of general accounting functions which include cost accounting, budgeting, forecasting, accounts payable, accounts receivable, general ledger, financial reporting, fixed assets and inventory control, cash flow. An adaptable and energetic team player that enjoys a motivating and challenging working.
          </p>
        </div>
      </div>
    </div>
  );
}

export { FounderCard };
