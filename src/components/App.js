import React, { Component } from 'react';

// components
import Intro from './Intro';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
