import React from 'react';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id='ceo-section'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.ceo} alt="ceo" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What I believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans"> As a professional photographer, my beliefs are the heartbeat of my artistic journey. They define the way I approach every photoshoot, every interaction, and every frame I capture. With each click of the shutter, I strive to tell compelling stories that resonate with the hearts of my clients and encapsulate the beauty of life's fleeting moments.</p>
      </div>

      <div className="app__chef-sign">
        <p>Jamal M.</p>
        <p className="p__opensans">Professional Photographer</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;