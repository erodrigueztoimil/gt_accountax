import React from 'react';

function Button(props) {
  return (
    <div onClick={props.click} style={styles.button}>
      <div style={styles.line}/>
      <div style={styles.line}/>
      <div style={styles.line}/>
    </div>
  );
}

const styles = {
  button: {
    height: '25px',
    width: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'transparent',
    border: 'none',
    padding: 0,
    boxSizing: 'border-box'
  },
  line: {
    height: '3px',
    width: '25px',
    backgroundColor: '#000'
  }
}

export { Button };
