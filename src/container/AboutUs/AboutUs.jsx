import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">At "Captured Moments," we believe in the power of visual storytelling. Our photography agency is dedicated to capturing the essence of life's most precious moments, turning them into timeless memories that you can cherish forever. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_camera flex__center">
        <img src={images.camera} alt="about_camera" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <p className="p__opensans">Our mission is simple - to freeze fleeting moments in time and transform them into evocative images that tell unique and compelling stories. We pride ourselves on our ability to blend creativity and technical expertise to produce photographs that resonate with emotions and authenticity.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;