import React, { useState } from 'react';
import './CakeCard.css';

const CakeCard = ({ cake, addToCart }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fallbackImage = 'https://img.freepik.com/free-photo/delicious-cake-dessert_144627-12345.jpg';

  // Разбиваем описание на состав
  const ingredients = cake.description.split(',').map(item => item.trim());

  // Проверяем тип товара по категории
  const isRoll = cake.category === 'rulet';
  const isCupcake = cake.category === 'cupcake';
  const isTrifle = cake.category === 'trifle';
  const isTort = cake.category === 'tort';

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(cake);
  };

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
            <span className="overlay-text">🔍 Быстрый просмотр</span>
          </div>
        </div>
        
        <div className="cake-content">
          <h3 className="cake-title">{cake.name}</h3>
          <p className="cake-description">{cake.description.substring(0, 60)}...</p>
          
          <div className="cake-details">
            <span className="cake-weight">⚖️ {cake.weight}</span>
            <span className="cake-price">{cake.price} ₽</span>
          </div>
          
          {/* Информация о минимальном заказе */}
          {(isCupcake || isTrifle) && (
            <div className="min-order-badge">
              <span className="min-order-icon">📦</span>
              <span className="min-order-text">Мин. заказ: 8 шт</span>
            </div>
          )}
          
          {/* Цена за 8 штук для капкейков и трайфлов */}
          {(isCupcake || isTrifle) && (
            <div className="price-for-8">
              <span className="price-8-label">Цена за 8 шт:</span>
              <span className="price-8-value">
                {isCupcake ? '1440' : '2000'} ₽
              </span>
            </div>
          )}
          
          {/* Показываем декор только для тортов */}
          {isTort && (
            <div className="decor-badge">
              <span className="decor-icon">🎨</span>
              <span className="decor-text">Декор отдельно</span>
            </div>
          )}

          {/* Кнопка добавления в корзину */}
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <span className="btn-icon">🛒</span>
            <span className="btn-text">В корзину</span>
          </button>
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
              {cake.popular && <span className="modal-popular">🔥 Хит продаж</span>}
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>📋 Состав:</h3>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>• {ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>⚖️ Характеристики:</h3>
                <div className="modal-info-grid">
                  <div className="modal-info-item">
                    <span className="info-label">Вес:</span>
                    <span className="info-value">{cake.weight}</span>
                  </div>
                  <div className="modal-info-item">
                    <span className="info-label">Цена:</span>
                    <span className="info-value price">{cake.price} ₽</span>
                  </div>
                </div>
                {cake.note && <p className="cake-note-modal">{cake.note}</p>}
              </div>

              {/* Информация о минимальном заказе в модалке */}
              {(isCupcake || isTrifle) && (
                <div className="modal-section order-info">
                  <h3>📦 Условия заказа:</h3>
                  <div className="order-info-grid">
                    <div className="order-info-item">
                      <span className="order-info-label">Минимальный заказ:</span>
                      <span className="order-info-value highlight">8 штук</span>
                    </div>
                    <div className="order-info-item">
                      <span className="order-info-label">Цена за 8 шт:</span>
                      <span className="order-info-value price">
                        {isCupcake ? '1440' : '2000'} ₽
                      </span>
                    </div>
                  </div>
                  <p className="order-note">Можно выбрать разные вкусы</p>
                </div>
              )}

              {/* Информация о декоре для тортов */}
              {isTort && (
                <div className="modal-section decor-info-section">
                  <h3>🎨 Декор:</h3>
                  <p className="decor-info">
                    Декор торта оплачивается отдельно. Вы можете выбрать любой декор из нашего каталога или заказать индивидуальный.
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="modal-add-to-cart-btn" onClick={handleAddToCart}>
                <span className="btn-icon">🛒</span>
                <span className="btn-text">Добавить в корзину</span>
              </button>
              <button className="modal-close-btn" onClick={() => setShowModal(false)}>
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