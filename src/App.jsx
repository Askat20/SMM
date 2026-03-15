import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

// Pages
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Добавление в корзину
  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Показываем корзину после добавления
    setIsCartOpen(true);
  };

  // Удаление из корзины
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Изменение количества
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Очистка корзины
  const clearCart = () => {
    setCartItems([]);
  };

  // Подсчет итога
  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  // Подсчет количества товаров
  const getTotalCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="app">
      <Header 
        cartCount={getTotalCount()} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Catalog addToCart={addToCart} />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />

      {/* Корзина */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClear={clearCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;