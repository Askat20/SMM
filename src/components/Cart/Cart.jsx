import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onClear, totalPrice }) => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [orderSent, setOrderSent] = useState(false);

  // Номер телефона для заказов
  const PHONE_NUMBER = '79362884838';

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    
    const orderText = `🍰 *Новый заказ!*\n\n👤 *Имя:* ${orderForm.name}\n📞 *Телефон:* ${orderForm.phone}\n\n*Заказ:*\n${items.map(item => 
      `• ${item.name} - ${item.quantity} шт × ${item.price} ₽ = ${item.price * item.quantity} ₽`
    ).join('\n')}\n\n💰 *Итого:* ${totalPrice} ₽${orderForm.comment ? `\n\n💬 *Комментарий:* ${orderForm.comment}` : ''}`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setOrderSent(true);
    
    setTimeout(() => {
      onClear();
      setOrderSent(false);
      setShowOrderForm(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="cart-close" onClick={onClose}>×</button>
        
        <h2 className="cart-title">Корзина</h2>
        
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Корзина пуста</p>
            <button className="cart-btn cart-btn-order" onClick={onClose}>Продолжить покупки</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price} ₽ × {item.quantity}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => onRemove(item.id)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Итого:</span>
              <span>{totalPrice} ₽</span>
            </div>

            {!showOrderForm ? (
              <div className="cart-actions">
                <button onClick={onClear}>Очистить</button>
                <button onClick={() => setShowOrderForm(true)}>Оформить заказ</button>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit}>
                {orderSent ? (
                  <div className="cart-success">
                    <p>✅ Заказ отправлен!</p>
                    <p>Скоро с вами свяжутся</p>
                  </div>
                ) : (
                  <>
                    <h3>Данные для заказа</h3>
                    
                    <input
                      type="text"
                      placeholder="Ваше имя *"
                      required
                      value={orderForm.name}
                      onChange={e => setOrderForm({...orderForm, name: e.target.value})}
                    />

                    <input
                      type="tel"
                      placeholder="Телефон *"
                      required
                      value={orderForm.phone}
                      onChange={e => setOrderForm({...orderForm, phone: e.target.value})}
                    />

                    <textarea
                      placeholder="Комментарий"
                      value={orderForm.comment}
                      onChange={e => setOrderForm({...orderForm, comment: e.target.value})}
                      rows="3"
                    />

                    <div className="cart-actions">
                      <button type="button" onClick={() => setShowOrderForm(false)}>Назад</button>
                      <button type="submit">Отправить</button>
                    </div>
                  </>
                )}
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;