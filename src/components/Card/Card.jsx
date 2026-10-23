import React from 'react';
import './Card.css';

function Card ({username, description, image}) {

    return (
<div class="card">
  <div class="image-container">
    <img src={image} class="profile-image" alt="Somya Travels Profile"></img>
  </div>
  <div class="card-content">
    <h1 class="card-title">{username}</h1>
    <p class="card-description">{description}</p>
    <button class="card-btn">View Profile</button>
  </div>
</div>
    )
}
export default Card;