import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Главная' },
    { path: '/catalog', name: 'Каталог' },
    { path: '/about', name: 'О нас' },
    { path: '/contacts', name: 'Контакты' }
  ];

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="TORTY OT KYMBATA" className="logo-image" />
          <span className="logo-text">TORTY OT KYMBATA</span>
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;