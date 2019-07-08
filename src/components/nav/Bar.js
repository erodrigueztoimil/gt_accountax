import React from 'react';
import '../../styles/stylesheets/Bar.css';
import { Button } from './';
import { AppointmentRoundButton } from '../common';

function Bar(props) {
  return (
    <div className='bar'>
      <div className='appointment-button'>
        <AppointmentRoundButton />
      </div>
      <div className='divider'/>
      <div className='tuggler-button'>
        <Button click={props.click}/>
      </div>
    </div>
  );
}

export { Bar };
