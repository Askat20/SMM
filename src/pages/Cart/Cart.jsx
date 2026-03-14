import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import OrderForm from '../../components/OrderForm/OrderForm';
import { formatPrice } from '../../utils/validation';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <FaShoppingBag className="empty-cart-icon" />
            <h2>Корзина пуста</h2>
            <p>Но это никогда не поздно исправить :)</p>
            <Link to="/catalog" className="btn">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="section-title">Корзина</h1>

        <div className="cart-grid">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-price">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}

            <div className="cart-actions">
              <button onClick={() => navigate('/catalog')} className="btn btn-outline">
                <FaArrowLeft /> Продолжить покупки
              </button>
              <button onClick={clearCart} className="btn btn-outline">
                Очистить корзину
              </button>
            </div>
          </div>

          <div className="cart-summary">
            <h3>Итого</h3>
            
            <div className="summary-details">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <span>Общая сумма:</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>

            <button 
              className="btn checkout-btn"
              onClick={() => setShowOrderForm(true)}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>

      {showOrderForm && (
        <OrderForm onClose={() => setShowOrderForm(false)} />
      )}
    </div>
  );
};

export default Cart;