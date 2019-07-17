import React from 'react';
import '../styles/stylesheets/App.css';
import { Home, About } from './components';

function App() {
  return (
    <div className='app'>
      <Home />
      <About />
    </div>
  );
}

export default App;
