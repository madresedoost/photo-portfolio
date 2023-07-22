import React from 'react';

import { ServicesItem } from '../../components';

import { data, images } from '../../constants';
import './Specialservices.css';

const Specialservices = () => (
  <div className="app__specialservices flex__center section__padding" id="services">

    <div className="app__specialservices-services">
      <div className="app__services-img  flex__center">
        <img src={images.services} alt='services'></img>
      </div>

      <div className="app__services-text  flex__center">
        <h1 className="headtext__cormorant">My Services</h1>
        <div className="app__specialservices_services_items">
          { data.services.map((service, index) => (
            <ServicesItem key={service.title + index} title={service.title} price={service.price} tags={service.tags}/>
          ))}
        </div>
        <div style={{ marginTop: 15 }}>
          <button type="button" className="custom__button">Contact Me</button>
        </div>
      </div>
    </div>

    
  </div>
);

export default Specialservices;