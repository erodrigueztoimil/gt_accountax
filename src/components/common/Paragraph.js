import React from 'react';

function Paragraph(props) {
  return (
    <p style={styles.paragraph}>{props.text}</p>
  );
}

const styles = {
  paragraph: {
    margin: 0,
    padding: 0
  }
}

export { Paragraph };
