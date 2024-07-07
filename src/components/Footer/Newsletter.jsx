import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant gradient__text2">Contact Us
</h1>
      <p className="p__opensans"> 6 Lexington Heights Currambine Perth WA 6028
</p>
<p className="p__opensans">0421376264
</p>
<p className="p__opensans"> 0481188998
</p>

    </div>

  </div>
);

export default Newsletter;

/* <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
    */