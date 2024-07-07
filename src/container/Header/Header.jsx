import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Monameno Moments: Capturing Timeless Beauty" />
      <h2 className="app__header-h2 gradient__text">Capturing Life's Beautiful Moments with MONAMENTO</h2>
      <p className="p__opensansw" style={{ margin: '2rem 0' }}>Welcome to Monamento's Website. We specialize in capturing life's precious moments with beauty that lasts forever. </p>
      <button type="button" className="custom__button"><a href='/gallery'>View Gallery</a></button>
    </div>

    <div className="app__wrapper_img2">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;