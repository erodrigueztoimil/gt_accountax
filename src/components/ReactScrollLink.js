import React from 'react';
import { Link } from 'react-scroll';

function ReactScrollLink(props) {
  return (
    <Link
      onClick={props.click}
      activeClass="active"
      to={props.page}
      spy={true}
      smooth={true}
      duration={1400}
    >
      {props.page}
    </Link>
  );
}

export default ReactScrollLink;
