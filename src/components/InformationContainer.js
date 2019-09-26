import React from 'react';

function InformationContainer(props) {
  if (props.left) {
    return (
      <div className='information-container'>
        <div className='image-container'>
          <img src={props.imgSrc} alt={props.header}/>
        </div>
        <div className='description-container'>
          <h3>{props.header}</h3>
          <p>{props.paragraph}</p>
        </div>
      </div>
    );
  }
  else if (props.right) {
    return (
      <div className='information-container'>
        <div className='description-container'>
          <h3>{props.header}</h3>
          <p>{props.paragraph}</p>
        </div>
        <div className='image-container'>
          <img src={props.imgSrc} alt={props.header}/>
        </div>
      </div>
    );
  }
}

export default InformationContainer;
