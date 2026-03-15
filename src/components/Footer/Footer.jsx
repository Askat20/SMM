import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="premium-footer-pattern"></div>
      
      <div className="container">
        <div className="premium-footer-content">
          <div className="premium-footer-section premium-footer-logo-section">
            <div className="premium-footer-logo-wrapper">
              <img src="/logo.png" alt="TORTY OT KYMBATA" className="premium-footer-logo" />
              <div className="premium-footer-logo-text">
                <span className="premium-footer-brand">TORTY OT KYMBATA</span>
                <span className="premium-footer-tagline">LUXURY CAKES</span>
              </div>
            </div>
            <p className="premium-footer-description">
              Домашние тортики премиум-класса с любовью и заботой. 
              Только натуральные ингредиенты высшего качества.
            </p>
            <div className="premium-footer-decoration">
              <span>✦</span>
              <span>👑</span>
              <span>✦</span>
            </div>
          </div>

          <div className="premium-footer-section">
            <h3 className="premium-footer-title">
              <span>📞</span>
              <span>КОНТАКТЫ</span>
              <span>📞</span>
            </h3>
            <div className="premium-footer-contacts">
              <a href="tel:+79309476635" className="premium-footer-contact">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+7 (930) 947-66-35</span>
              </a>
              <a href="https://wa.me/79309476635" className="premium-footer-contact" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💬</span>
                <span className="contact-text">WhatsApp</span>
              </a>
              <div className="premium-footer-contact">
                <span className="contact-icon">⏰</span>
                <span className="contact-text">Ежедневно 9:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div className="premium-footer-section">
            <h3 className="premium-footer-title">
              <span>🍰</span>
              <span>ИНФОРМАЦИЯ</span>
              <span>🍰</span>
            </h3>
            <div className="premium-footer-info">
              <div className="premium-footer-info-item">
                <span className="info-icon">🎂</span>
                <span>Индивидуальные заказы</span>
              </div>
              <div className="premium-footer-info-item">
                <span className="info-icon">⏱️</span>
                <span>Срок изготовления: 1-3 дня</span>
              </div>
              <div className="premium-footer-info-item">
                <span className="info-icon">💳</span>
                <span>Наличные/Перевод</span>
              </div>
              <div className="premium-footer-info-item">
                <span className="info-icon">📦</span>
                <span>Мин. заказ: 8 шт (капкейки/трайфлы)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="premium-footer-bottom">
          <div className="premium-footer-divider">
            <span>✦</span>
            <span>👑</span>
            <span>✦</span>
            <span>👑</span>
            <span>✦</span>
          </div>
          <p className="premium-footer-copyright">
            © 2026 TORTY OT KYMBATA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
          <p className="premium-footer-made">
            СДЕЛАНО С ❤️ И ЗОЛОТОМ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;