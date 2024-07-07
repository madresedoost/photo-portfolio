import React from 'react';
import { images } from '../../constants';
import './me.css';

const Me = () => (
  <div className="app__bg app__wrapper section__padding" id='ceo-section'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.ceo} alt="ceo" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant gradient__text2 gradient__text">Our involvement</h1>

      <div className="app__Me-content">
        <div className="app__Me-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans"> "My motto revolves around capturing life's fleeting moments through photography, where time becomes irrelevant once I hold my camera. The joy I find in freezing these beautiful moments in time enhances their significance, transforming them into cherished memories that last a lifetime."</p>
      </div>

      <div className="app__Me-sign">
        <p>Monamento</p>
        <p className="p__opensans">Professional Photographer</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Me;