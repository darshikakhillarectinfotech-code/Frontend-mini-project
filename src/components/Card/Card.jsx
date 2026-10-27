import React from 'react';
import './Card.css';

function Card ({username, description, image}) {
      console.log(username)

    return (
      <div>
        {/* Popular Destinations Preview Section */}
      <section className="destinations-section">
        <h2 className="section-title">Popular Escapes</h2>
        <p className="section-subtitle">Handpicked destinations for your next adventure</p>
        
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Beach" />
            <div className="card-info">
              <h3>Goa Sunset Trails</h3>
              <p>4 Days / 3 Nights</p>
              <div className='pannel'>
                <span className="price">₹12,999</span>
                <button className="details">view details</button>
              </div>
            </div>
          </div>
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" alt="Mountains" />
            <div className="card-info">
              <h3>Manali Snow Peak</h3>
              <p>6 Days / 5 Nights</p>
              
               <div className='pannel'>
                <span className="price">₹18,499</span>
                <button className="details">view details</button>
              </div>
            </div>
          </div>
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" alt="Desert" />
            <div className="card-info">
              <h3>Jaisalmer Royal Camp</h3>
              <p>3 Days / 2 Nights</p>
              <div className='pannel'>
                <span className="price">₹9,999</span>
                <button className="details">view details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}
export default Card;