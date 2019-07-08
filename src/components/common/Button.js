import React from 'react';

function Button(props) {
  return (
    <a style={props.styles} href={props.page}>{props.text}</a>
  );
}

export { Button };
