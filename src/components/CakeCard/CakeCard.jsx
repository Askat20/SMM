import React, { useState } from 'react';
import './CakeCard.css';

const CakeCard = ({ cake }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fallbackImage = 'https://img.freepik.com/free-photo/delicious-cake-dessert_144627-12345.jpg';

  // Разбиваем описание на состав
  const ingredients = cake.description.split(',').map(item => item.trim());

  return (
    <>
      <div className="cake-card">
        {cake.popular && <span className="cake-badge">🔥 Хит</span>}
        
        <div className="cake-image" onClick={() => setShowModal(true)}>
          {!imageLoaded && !imageError && <div className="image-loader"></div>}
          <img 
            src={imageError ? fallbackImage : cake.image} 
            alt={cake.name}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          {imageError && (
            <div className="image-error">🍰</div>
          )}
          <div className="image-overlay">
            <span className="overlay-text">👆 Нажми для состава</span>
          </div>
        </div>
        
        <div className="cake-content">
          <h3 className="cake-title">{cake.name}</h3>
          <p className="cake-description">{cake.description.substring(0, 50)}...</p>
          
          <div className="cake-details">
            <span className="cake-weight">⚖️ {cake.weight}</span>
            <span className="cake-price">{cake.price} ₽</span>
          </div>
          <p className="decor-note">🎂 Декор оплачивается отдельно</p>
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="modal-header">
              <img 
                src={imageError ? fallbackImage : cake.image} 
                alt={cake.name}
                className="modal-image"
              />
              <h2>{cake.name}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>📋 Полный состав:</h3>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>• {ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>⚖️ Характеристики:</h3>
                <div className="modal-info">
                  <p><strong>Вес:</strong> <span>{cake.weight}</span></p>
                  <p><strong>Цена:</strong> <span>{cake.price} ₽</span></p>
                  <p><strong>Категория:</strong> <span>{cake.category}</span></p>
                </div>
              </div>

              <div className="modal-section">
                <h3>🎨 Декор:</h3>
                <p className="decor-info">Декор торта оплачивается отдельно. Вы можете выбрать любой декор.</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn" onClick={() => setShowModal(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CakeCard;