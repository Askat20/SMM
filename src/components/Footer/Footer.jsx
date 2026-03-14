import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Тортики от Кымбата</h3>
          <p>Домашние тортики с любовью</p>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>
          <p>📞 +7 (930) 947-66-35</p>
          <p>📍 г. Москва, м. Щелковская</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Тортики от Кымбата. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;