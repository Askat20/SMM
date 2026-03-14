import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">О нас</h1>
        
        <div className="about-content">
          <img 
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="О нас" 
            className="about-image"
          />
          
          <div className="about-text">
            <h2>Тортики от Кымбата</h2>
            <p>
              Мы создаем домашние тортики с любовью и заботой о вас. 
              Каждое изделие готовится по семейным рецептам из натуральных продуктов.
            </p>
            <p>
              Наша цель - дарить вам вкусные моменты счастья!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;