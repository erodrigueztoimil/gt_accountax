import React, {Component} from 'react';
import '../css/App.css';
import BgImage2 from '../images/bg_2.jpg';
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
        <Parallax bgImage={BgImage2} strength={400}>
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
