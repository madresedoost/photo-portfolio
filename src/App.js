import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Specialservices } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Specialservices />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
