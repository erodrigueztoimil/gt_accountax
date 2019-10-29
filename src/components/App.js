import React, {Component} from 'react';
import '../css/App.css';
import { Parallax } from 'react-parallax';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
        <About />
        <Parallax bgImage={'https://ucarecdn.com/5ad279c1-b1ab-4a68-8ea3-ba0b90ebe97b/bg_2.jpg'} strength={400}>
          <div style={{ height: 600 }} />
        </Parallax>
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
