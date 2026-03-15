import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Герой секция */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">
            <span className="hero-icon">👩‍🍳</span>
            О нас
          </h1>
          <p className="about-hero-text">
            Домашние тортики с любовью и заботой о каждом клиенте
          </p>
        </div>
      </div>

      <div className="container">
        {/* История */}
        <div className="about-story">
          <div className="story-content">
            <h2 className="story-title">
              <span className="title-icon">📖</span>
              Наша история
            </h2>
            <p className="story-text">
              Всё началось с маленькой домашней кухни и огромной любви к выпечке. 
              Каждый торт мы готовим как для самых близких людей, вкладывая душу 
              и используя только натуральные ингредиенты.
            </p>
            <p className="story-text">
              Сегодня мы радуем своих клиентов не только классическими тортами, 
              но и авторскими десертами, капкейками и трайфлами. Каждое изделие 
              создается с любовью и вниманием к деталям.
            </p>
          </div>
          <div className="story-image-wrapper">
            <div className="story-image-decoration">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Процесс приготовления"
                className="story-image"
              />
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <h2 className="features-title">
          <span className="title-icon">✨</span>
          Почему выбирают нас
        </h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🥚</span>
            </div>
            <h3 className="feature-title">Натуральные продукты</h3>
            <p className="feature-text">
              Только свежие яйца, масло, сливки и творожный сыр. Никаких заменителей и консервантов.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">👩‍🍳</span>
            </div>
            <h3 className="feature-title">Домашние рецепты</h3>
            <p className="feature-text">
              Готовим по семейным рецептам, которые передаются из поколения в поколение.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">❤️</span>
            </div>
            <h3 className="feature-title">С любовью</h3>
            <p className="feature-text">
              Каждое изделие создается с душой и вниманием к деталям, как для самых близких.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🎂</span>
            </div>
            <h3 className="feature-title">Индивидуальный подход</h3>
            <p className="feature-text">
              Учитываем все пожелания при создании десертов. Декор обсуждается отдельно.
            </p>
          </div>
        </div>

        {/* Цитата */}
        <div className="about-quote">
          <div className="quote-content">
            <span className="quote-icon">"</span>
            <p className="quote-text">
              Мы не просто готовим торты — мы создаем счастливые моменты для вас и ваших близких
            </p>
            <div className="quote-author">— Кымбат</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;