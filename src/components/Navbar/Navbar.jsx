import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Bookmark} from 'lucide-react'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jab 50px se zyaada scroll ho tab navbar visible ho
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="nav-container">
        <div className="nav-logo">Musafir<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
        <button className="nav-btn">Book Now <Bookmark /> </button>
      </div>
    </nav>
  );
};

export default Navbar;