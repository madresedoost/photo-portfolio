import React from 'react';

import { AboutUs, Me, Footer, Gallery, Header, Intro, Specialservices } from '../container';
import { Navbar } from '../components';
import '../App.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <Specialservices />
      <Me />
      <Intro />
      <Footer />
    </div>

  )
};

export default Home;
