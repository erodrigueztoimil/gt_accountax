import React from 'react';
import { Button } from './';

function AppointmentRoundButton() {
  return (
    <Button text='Appointment' styles={styles.button} page='/'/>
  );
}

const styles = {
  button: {
    fontSize: '20px',
    padding: '10px 30px',
    border: '1px solid #000',
    borderRadius: '40px',
    textDecoration: 'none',
    color: '#000'
  }
}

export { AppointmentRoundButton };
