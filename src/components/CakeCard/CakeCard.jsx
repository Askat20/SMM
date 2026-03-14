import React from 'react';
import './CakeCard.css';

const CakeCard = ({ cake }) => {
  return (
    <div className="cake-card">
      {cake.popular && <span className="cake-badge">🔥 Хит</span>}
      
      <div className="cake-image">
        <img src={cake.image} alt={cake.name} />
      </div>
      
      <div className="cake-content">
        <h3 className="cake-title">{cake.name}</h3>
        <p className="cake-description">{cake.description}</p>
        
        <div className="cake-details">
          <span className="cake-weight">⚖️ {cake.weight}</span>
          <span className="cake-price">{cake.price} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;