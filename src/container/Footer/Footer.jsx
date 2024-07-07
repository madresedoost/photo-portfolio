import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="footer">
    <FooterOverlay />
    <Newsletter />
<div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;The most fulfilling moments are often found when fully engaged in serving others, where self-discovery blooms brightly.&quot;</p>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=61561761440638" target="_blank"><FiFacebook /></a>
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Monamento. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
