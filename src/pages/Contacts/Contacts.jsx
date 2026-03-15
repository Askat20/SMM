import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-page">
      {/* Герой секция */}
      <div className="contacts-hero">
        <div className="container">
          <h1 className="contacts-hero-title">
            <span className="hero-icon">📞</span>
            Контакты
          </h1>
          <p className="contacts-hero-text">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contacts-grid">
          {/* Левая колонка - контактная информация */}
          <div className="contacts-info">
            <h2 className="info-title">
              <span className="title-icon">📱</span>
              Наши контакты
            </h2>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon-wrapper">
                  <span className="card-icon">📞</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Телефон</h3>
                  <a href="tel:+79309476635" className="card-link">+7 (930) 947-66-35</a>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon-wrapper">
                  <span className="card-icon">💬</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">WhatsApp</h3>
                  <a href="https://wa.me/79309476635" className="card-link" target="_blank" rel="noopener noreferrer">
                    +7 (930) 947-66-35
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - пустая или можно добавить что-то другое */}
          <div className="contacts-social">
            <div className="info-card" style={{ background: 'linear-gradient(135deg, #fff5f5, #ffe3e3)' }}>
              <div className="card-icon-wrapper" style={{ background: 'white' }}>
                <span className="card-icon">📝</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">Заказы</h3>
                <p className="card-text">Принимаем заказы через телефон и WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="contacts-bottom">
          <div className="bottom-card">
            <span className="bottom-icon">🎂</span>
            <div className="bottom-content">
              <h4>Индивидуальные заказы</h4>
              <p>Обсуждаем все детали: вес, состав, декор</p>
            </div>
          </div>
          <div className="bottom-card">
            <span className="bottom-icon">⏱️</span>
            <div className="bottom-content">
              <h4>Срок изготовления</h4>
              <p>От 1 дня до 3 дней, зависит от сложности</p>
            </div>
          </div>
          <div className="bottom-card">
            <span className="bottom-icon">💳</span>
            <div className="bottom-content">
              <h4>Способы оплаты</h4>
              <p>Наличные, перевод на карту</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;