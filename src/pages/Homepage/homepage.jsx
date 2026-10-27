import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './homepage.css';
import Card from '../../components/Card/Card'
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        
        {/* Top Right Corner Brand Accent */}
        <div className="top-right-brand">
          <span className="brand-text">Musafir</span>
          <span className="brand-subtext">Travel Beyond Limits</span>
        </div>

        <div className="hero-content">
          <p className="hero-tagline">EXPLORE THE UNEXPLORED</p>
          <h1 className="hero-title">Your Journey Begins With <span className="highlight">Musafir</span></h1>
          <p className="hero-description">
            Discover breathtaking destinations, curated group trips, and seamless booking experiences.
          </p>

          {/* Quick Search Bar */}
          <div className="search-box">
            <div className="search-item">
              <label>Destination</label>
              <input type="text" placeholder="Where to?" />
            </div>
            <div className="search-item">
              <label>Dates</label>
              <input type="date" />
            </div>
            <div className="search-item">
              <label>Travelers</label>
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>Group (4+)</option>
              </select>
            </div>
            <button className="search-btn">Search Trips</button>
          </div>
        </div>
      </section>
      <Card />
    </div>
  );
};

export default Home;