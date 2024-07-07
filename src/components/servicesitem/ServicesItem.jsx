import React from 'react';

import './servicesItem.css';

const ServicesItem = ({ title, price, tags }) => (
  <div className="app__servicesitem">
    <div className="app__servicesitem-head">
      <div className="app__servicesitem-name">
        <p className="p__cormorant" style={{ color: '#000000' }}>{title}</p>
      </div>
      <div className="app__servicesitem-dash" />
      <div className="app__servicesitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__servicesitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default ServicesItem;