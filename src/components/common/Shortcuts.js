import React, {Component} from 'react';
import { Button } from './';

class Shortcuts extends Component {
  constructor() {
    super();
    this.state = {
      shortcuts: [
        'Facebook',
        'Email',
        'Phone'
      ]
    }
  }
  render() {
    const shortcuts = this.state.shortcuts.map((text) => {
      return (
        <Button text={text} styles={styles.shortcut}/>
      )
    });
    return (
      <div className='shortcuts'>
        {shortcuts}
      </div>
    );
  }
}

const styles = {
  shortcut: {
    fontSize: '23px',
    padding: '0 30px'
  }
}

export { Shortcuts };
