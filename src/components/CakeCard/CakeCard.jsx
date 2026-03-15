import React, { useState } from 'react';
import './CakeCard.css';

const CakeCard = ({ cake }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fallbackImage = 'https://img.freepik.com/free-photo/delicious-cake-dessert_144627-12345.jpg';

  const ingredients = cake.description.split(',').map(item => item.trim());

  const isRoll = cake.category === 'rulet';
  const isCupcake = cake.category === 'cupcake';
  const isTrifle = cake.category === 'trifle';
  const isTort = cake.category === 'tort';

  return (
    <>
      <div className="cake-card premium-card" onClick={() => setShowModal(true)}>
        {cake.popular && (
          <div className="premium-badge">
            <span className="badge-icon">👑</span>
            <span className="badge-text">ХИТ ПРОДАЖ</span>
            <span className="badge-icon">👑</span>
          </div>
        )}
        
        <div className="premium-image-wrapper">
          {!imageLoaded && !imageError && <div className="premium-skeleton"></div>}
          <img 
            src={imageError ? fallbackImage : cake.image} 
            alt={cake.name}
            className={`premium-image ${imageLoaded ? 'loaded' : ''}`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          {imageError && (
            <div className="premium-error">
              <span>👑</span>
            </div>
          )}
          <div className="premium-overlay">
            <span className="premium-overlay-text">✨ ПОДРОБНЕЕ ✨</span>
          </div>
          <div className="premium-corner top-left"></div>
          <div className="premium-corner top-right"></div>
          <div className="premium-corner bottom-left"></div>
          <div className="premium-corner bottom-right"></div>
        </div>
        
        <div className="premium-content">
          <h3 className="premium-title">{cake.name}</h3>
          <p className="premium-description">{cake.description.substring(0, 60)}...</p>
          
          <div className="premium-info">
            <div className="premium-weight">
              <span className="info-icon">⚖️</span>
              <span className="info-text">{cake.weight}</span>
            </div>
            <div className="premium-price">
              <span className="price-currency">₽</span>
              <span className="price-value">{cake.price.toLocaleString()}</span>
            </div>
          </div>
          
          {(isCupcake || isTrifle) && (
            <div className="premium-order-badge">
              <span className="order-icon">📦</span>
              <div className="order-info">
                <span className="order-min">МИН. ЗАКАЗ: 8 ШТ</span>
                <span className="order-price">ЦЕНА ЗА 8 ШТ: {isCupcake ? '1440' : '2000'} ₽</span>
              </div>
            </div>
          )}
          
          {isTort && (
            <div className="premium-decor-badge">
              <span className="decor-icon">🎨</span>
              <span className="decor-text">ДЕКОР ОТДЕЛЬНО</span>
            </div>
          )}
        </div>
      </div>

      {/* ПРЕМИУМ МОДАЛКА */}
      {showModal && (
        <div className="premium-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="premium-modal-content" onClick={e => e.stopPropagation()}>
            <button className="premium-modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="premium-modal-image-container">
              <img 
                src={imageError ? fallbackImage : cake.image} 
                alt={cake.name}
                className="premium-modal-image"
              />
              {cake.popular && (
                <div className="premium-modal-badge">
                  <span>👑</span>
                  <span>ХИТ</span>
                  <span>👑</span>
                </div>
              )}
              <div className="premium-modal-corner tl"></div>
              <div className="premium-modal-corner tr"></div>
              <div className="premium-modal-corner bl"></div>
              <div className="premium-modal-corner br"></div>
            </div>
            
            <div className="premium-modal-inner">
              <h2 className="premium-modal-title">{cake.name}</h2>
              
              <div className="premium-modal-section">
                <h3 className="premium-modal-section-title">
                  <span>📋</span>
                  <span>СОСТАВ</span>
                  <span>📋</span>
                </h3>
                <ul className="premium-ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <span className="ingredient-bullet">✦</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="premium-modal-info-grid">
                <div className="premium-modal-info-item">
                  <span className="premium-info-label">ВЕС</span>
                  <span className="premium-info-value">{cake.weight}</span>
                </div>
                <div className="premium-modal-info-item">
                  <span className="premium-info-label">ЦЕНА</span>
                  <span className="premium-info-value premium-price">{cake.price} ₽</span>
                </div>
              </div>

              {(isCupcake || isTrifle) && (
                <div className="premium-modal-order-info">
                  <h3 className="premium-modal-section-title">
                    <span>📦</span>
                    <span>УСЛОВИЯ ЗАКАЗА</span>
                    <span>📦</span>
                  </h3>
                  <div className="premium-order-details">
                    <div className="premium-order-detail">
                      <span>МИНИМАЛЬНЫЙ ЗАКАЗ:</span>
                      <strong>8 ШТУК</strong>
                    </div>
                    <div className="premium-order-detail">
                      <span>ЦЕНА ЗА 8 ШТ:</span>
                      <strong className="premium-price">{isCupcake ? '1440' : '2000'} ₽</strong>
                    </div>
                  </div>
                  <p className="premium-order-note">✨ МОЖНО ВЫБРАТЬ РАЗНЫЕ ВКУСЫ ✨</p>
                </div>
              )}

              {isTort && (
                <div className="premium-modal-decor-info">
                  <h3 className="premium-modal-section-title">
                    <span>🎨</span>
                    <span>ДЕКОР</span>
                    <span>🎨</span>
                  </h3>
                  <p className="premium-decor-text">
                    ДЕКОР ТОРТА ОПЛАЧИВАЕТСЯ ОТДЕЛЬНО. 
                    ВЫ МОЖЕТЕ ВЫБРАТЬ ЛЮБОЙ ДЕКОР ИЗ НАШЕГО КАТАЛОГА 
                    ИЛИ ЗАКАЗАТЬ ИНДИВИДУАЛЬНЫЙ.
                  </p>
                </div>
              )}
            </div>

            <div className="premium-modal-footer">
              <button className="premium-modal-btn" onClick={() => setShowModal(false)}>
                ЗАКРЫТЬ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CakeCard;