import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="container">
        <h1 className="section-title">Контакты</h1>
        
        <div className="contacts-content">
          <div className="contact-info">
            <h2>Свяжитесь с нами</h2>
            
            <div className="contact-item">
              <span className="contact-label">📞 Телефон:</span>
              <span>+7 (930) 947-66-35</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">📍 Адрес:</span>
              <span>г. Москва, м.Щелковская</span>
            </div>
            
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Contacts;