import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Preserving Memories, Capturing Life." />
      <h1 className="app__header-h1">Discover the Art of Timeless Photography</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to EternalGlimpse Photography Studio, a distinguished photography agency dedicated to capturing life's most cherished moments in everlasting beauty. </p>
      <button type="button" className="custom__button">View Gallery</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;