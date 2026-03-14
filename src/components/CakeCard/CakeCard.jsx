import React, { useState } from 'react';
import './CakeCard.css';

const CakeCard = ({ cake }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Запасное изображение на случай если все сломается
  const fallbackImage = 'https://img.freepik.com/free-photo/delicious-cake-dessert_144627-12345.jpg';

  return (
    <div className="cake-card">
      {cake.popular && <span className="cake-badge">🔥 Хит</span>}
      
      <div className="cake-image">
        {!imageLoaded && !imageError && <div className="image-loader"></div>}
        <img 
          src={imageError ? fallbackImage : cake.image} 
          alt={cake.name}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        {imageError && (
          <div className="image-error">
            🍰
          </div>
        )}
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