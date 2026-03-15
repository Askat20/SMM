import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;