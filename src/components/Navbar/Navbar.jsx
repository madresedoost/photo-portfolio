import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';


const Menu = () => {
  return ( 
    <div>
      
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href='/'>Home</a></li>
        <li className="p__opensans"><a href="#services">Services</a></li>
        <li className="p__opensans"><a href='/gallery'>Gallery</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#footer">Contact</a></li>
      </ul>
    </div>
   ) 
}

const Navbar = () => {
  const [toggleservices, setToggleServices] = useState(false);
  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <a href='/'><img src={images.logo} alt="app__logo" /></a>
      </div>
      <Menu/>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleServices(true)} />
        {toggleservices && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose color="fff" fontSize={27} className="overlay__close" onClick={() => setToggleServices(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleServices(false)}>Home</a></li>
              <li><a href="#Services" onClick={() => setToggleServices(false)}>Services</a></li>
              <li><a href="#gallery" onClick={() => setToggleServices(false)}>Gallery</a></li>
              <li><a href="#about" onClick={() => setToggleServices(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setToggleServices(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 