import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Menu = () => {
  return ( 
    <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#services">Services</a></li>
        <li className="p__opensans"><a href="#gallery">Gallery</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
   ) 
}

const Navbar = () => {
  const [toggleservices, setToggleservices] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <Menu/>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleservices(true)} />
        {toggleservices && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose color="fff" fontSize={27} className="overlay__close" onClick={() => setToggleservices(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleservices(false)}>Home</a></li>
              <li><a href="#Services" onClick={() => setToggleservices(false)}>Services</a></li>
              <li><a href="#gallery" onClick={() => setToggleservices(false)}>Gallery</a></li>
              <li><a href="#about" onClick={() => setToggleservices(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setToggleservices(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 